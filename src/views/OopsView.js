import { Alert, Row } from '../components/Bootstrap';

export const OopsView = (props) => (
	<Row className="align-items-center justify-content-center full-height">
		<Alert className="abs-center" color="danger" tag="main">
			<h1>Oops!</h1>
			<p>Looks like there was a problem.</p>
		</Alert>
	</Row>
);
