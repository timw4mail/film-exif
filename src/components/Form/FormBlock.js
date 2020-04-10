import {
	Col,
	FormFeedback,
	FormGroup,
	FormText,
	Input,
	InputGroup,
	Label,
} from '//components/Bootstrap';

export const FormBlock = ({
	children,
	grouped = false,
	helpText = null,
	invalidText = null,
	label,
	type = 'text',
	validText = null,
	...props
}) => {
	let formElement = (children !== undefined)
		? children
		: <Input id={props.name} name={props.name} type={type} {...props} />;

	if (grouped !== false) {
		formElement = <InputGroup>{formElement}</InputGroup>
	}

	const helperText = (helpText !== null)
		? <FormText>{helpText}</FormText>
		: null;

	let feedbackText = invalidText
	if (feedbackText === null && props.required === true) {
		feedbackText = 'This field is required.';
	}

	const feedback = (feedbackText !== null)
		? <FormFeedback>{feedbackText}</FormFeedback>
		: null;

	return (
		<Col xs={12} md={6} xl={4} className="d-flex align-items-baseline">
			<FormGroup>
				<Label for={props.name}>{label}</Label>
				{formElement}
				{helperText}
				{feedback}
			</FormGroup>
		</Col>
	);
};
