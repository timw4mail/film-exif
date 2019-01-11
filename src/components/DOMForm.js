import { linkEvent } from 'inferno';

function handleChange (props, event) {
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

function handleSubmit (props, event) {
	// Don't want to actually reload the page!
	event.preventDefault();

	// Parsers are formatters or maskers
	const parsers = {};

	const form = event.target.closest('form');
	const data = new FormData(form);

	data.forEach((value, name) => {
		const parserName = form.elements[name].dataset.parse;

		if (parserName !== undefined && parsers[parserName] !== undefined) {
			const parser = parsers[parserName];
			const parsedValue = parser(data.get(name));
			data.set(name, parsedValue);
		}
	});

	if (props.onSubmit) {
		props.onSubmit(data);
	}
}

export function DOMForm (props) {
	const passProps = {...props};
	const children = passProps.children;
	delete passProps.onChange;
	delete passProps.onSubmit;

	return (
		<form
			onInput={linkEvent(props, handleChange)}
			onSubmit={linkEvent(props, handleSubmit)}
			{...passProps}
		>
			{children}
		</form>
	);
}
