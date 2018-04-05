import BSAlert from 'inferno-bootstrap/dist/Alert';
import Badge from 'inferno-bootstrap/dist/Badge';
import Breadcrumb from 'inferno-bootstrap/dist/Breadcrumb';
import BreadcrumbItem from 'inferno-bootstrap/dist/BreadcrumbItem';
import ButtonDropdown from 'inferno-bootstrap/dist/ButtonDropdown';
import ButtonGroup from 'inferno-bootstrap/dist/ButtonGroup';
import ButtonToolbar from 'inferno-bootstrap/dist/ButtonToolbar';
import Collapse from 'inferno-bootstrap/dist/Collapse';
import Dropdown from 'inferno-bootstrap/dist/Dropdown';
import DropdownItem from 'inferno-bootstrap/dist/DropdownItem';
import DropdownMenu from 'inferno-bootstrap/dist/DropdownMenu';
import DropdownToggle from 'inferno-bootstrap/dist/DropdownToggle';
import BSJumbotron from 'inferno-bootstrap/dist/Jumbotron';
import Pagination from 'inferno-bootstrap/dist/Pagination';
import PaginationItem from 'inferno-bootstrap/dist/PaginationItem';
import PaginationLink from 'inferno-bootstrap/dist/PaginationLink';
import Popover from 'inferno-bootstrap/dist/Popover';
import PopoverBody from 'inferno-bootstrap/dist/PopoverBody';
import PopoverHeader from 'inferno-bootstrap/dist/PopoverHeader';
import PopperContent from 'inferno-bootstrap/dist/PopperContent';
import PopperTargetHelper from 'inferno-bootstrap/dist/PopperTargetHelper';
import Progress from 'inferno-bootstrap/dist/Progress';
import TabContent from 'inferno-bootstrap/dist/TabContent';
import TabPane from 'inferno-bootstrap/dist/TabPane';
import Table from 'inferno-bootstrap/dist/Table';
import Tooltip from 'inferno-bootstrap/dist/Tooltip';

export const BSWrapper = (Component, tagName) => {
	return ({children, ...props}) => (
		<Component tag={tagName} {...props}>{children}</Component>
	);
};

export const Alert = BSWrapper(BSAlert, 'bs-alert');
export const Jumbotron = BSWrapper(BSJumbotron, 'bs-jumbotron');

export {
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	ButtonDropdown,
	ButtonGroup,
	ButtonToolbar,
	Collapse,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Pagination,
	PaginationItem,
	PaginationLink,
	Popover,
	PopoverBody,
	PopoverHeader,
	PopperContent,
	PopperTargetHelper,
	Progress,
	TabContent,
	TabPane,
	Table,
	Tooltip,
};
