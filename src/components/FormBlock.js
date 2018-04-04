import {
	Col,
	FormGroup,
	Input,
	Label,
} from './Bootstrap';

export const FormBlock = ({
	children,
	label,
	name, 
	type='text', 
	...props
}) => {
	const formElement = (children !== undefined)
		? children
		: <Input id={name} name={name} type={type} {...props} />

	return (
		<Col xs={12} sm={6} md={3}>
			<FormGroup>
				<Label for={name}>{label}</Label>
				{formElement}
			</FormGroup>
		</Col>
	);
};
