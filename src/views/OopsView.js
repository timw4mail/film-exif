import { Alert, Row } from 'components/Bootstrap';

export const OopsView = (props) => (
	<Row className="align-items-center justify-content-center full-height">
		<Alert className="abs-center" color="danger" style={{padding: '5em'}} tag="main">
			<h1>Oops!</h1>
			<hr />
			<p>Looks like there was a problem. (╥﹏╥)</p>
			<p>(╯°□°）╯︵ ┻━┻</p>
		</Alert>
	</Row>
);
