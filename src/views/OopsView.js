import {
	Alert,
	Container,
	Row
} from '../components/Bootstrap';

export const OopsView = (props) => (
	<Container className="full-height" tag="section">
		<Row
			className="align-items-center full-height justify-content-center"
			tag="section"
		>
			<Alert className="abs-center" color="danger" tag="main">
				<h1>Oops!</h1>
				<p>Looks like there was a problem.</p>
			</Alert>
		</Row>
	</Container>
);
