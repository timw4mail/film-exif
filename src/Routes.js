import { Route, Switch } from 'inferno-router';

import {
	CameraAddView,
	FilmAddView,
	HomeView,
	OopsView,
} from '~/src/views';

export const Routes = (props) => (
	<Switch>
		<Route exact path="/" component={HomeView} />
		<Route path="/camera" component={CameraAddView} />
		<Route path="/film" component={FilmAddView} />
		<Route component={OopsView} />
	</Switch>
);
