import bindAll from 'lodash-es/bindAll';
import { Component, linkEvent } from 'inferno';

export class DOMForm extends Component {
	constructor () {
		super();

		this.state = {
			hasBeenValidated: false,
		};

		bindAll(this, [
			'handleChange',
			'handleSubmit',
		]);
	}

	handleChange (props, event) {
		const formElement = event.target.closest('form');
		const rawFormData = new FormData(formElement);

		if (props.onChange !== undefined) {
			const modified = props.onChange(rawFormData);

			if (modified !== undefined) {
				// Update form
				modified.forEach((value, key) => {
					const element = formElement.elements[key];
					element.value = value;
				});
			}
		}
	}

	handleSubmit (props, event) {
		// Don't want to actually reload the page!
		event.preventDefault();

		const form = event.target.closest('form');

		this.setState({
			hasBeenValidated: true,
		});

		// Parsers are formatters or maskers
		const parsers = {};
		const data = new FormData(form);

		data.forEach((value, name) => {
			const parserName = form.elements[name].dataset.parse;

			if (parserName !== undefined && parsers[parserName] !== undefined) {
				const parser = parsers[parserName];
				const parsedValue = parser(data.get(name));
				data.set(name, parsedValue);
			}
		});

		// Don't attempt to submit an invalid form
		if (!event.target.checkValidity()) {
			return;
		}

		if (props.onSubmit) {
			props.onSubmit(data);
		}
	}

	render (props, state, context) {
		const passProps = {...props};
		const children = passProps.children;
		delete passProps.onChange;
		delete passProps.onSubmit;

		const cssClass = state.hasBeenValidated ? 'was-validated' : 'needs-validation';

		return (
			<form
				class={cssClass}
				noValidate
				onInput={linkEvent(props, this.handleChange)}
				onSubmit={linkEvent(props, this.handleSubmit)}
				{...passProps}
			>
				{children}
			</form>
		);
	}
}
