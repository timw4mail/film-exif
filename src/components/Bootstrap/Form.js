import Button from 'inferno-bootstrap/dist/Button';
import Form from 'inferno-bootstrap/dist/Form/Form';
import BSFormFeedback from 'inferno-bootstrap/dist/Form/FormFeedback';
import BSFormGroup from 'inferno-bootstrap/dist/Form/FormGroup';
import FormText from 'inferno-bootstrap/dist/Form/FormText';
import Input from 'inferno-bootstrap/dist/Form/Input';
import InputGroup from 'inferno-bootstrap/dist/Form/InputGroup';
import InputGroupAddon from 'inferno-bootstrap/dist/Form/InputGroupAddon';
import InputGroupButtonDropdown from 'inferno-bootstrap/dist/Form/InputGroupButtonDropdown';
import InputGroupText from 'inferno-bootstrap/dist/Form/InputGroupText';
import Label from 'inferno-bootstrap/dist/Form/Label';

import { BSWrapper } from 'components/Bootstrap';

export const FormFeedback = BSWrapper(BSFormFeedback, 'bs-form-feedback');
export const FormGroup = BSWrapper(BSFormGroup, 'bs-form-group');

export {
	Button,
	Form,
	FormText,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupButtonDropdown,
	InputGroupText,
	Label,
};
