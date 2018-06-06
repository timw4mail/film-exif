import { Redirect, Route, Switch } from 'inferno-router';

import {
	CameraAddView,
	FilmAddView,
	HomeView,
	OopsView,
} from '//views';

export const Routes = () => (
	<Switch>
		<Route exact path="/" render={() => <Redirect to="/home" />} />
		<Route exact path="/home" component={HomeView} />
		<Route path="/camera" component={CameraAddView} />
		<Route path="/film" component={FilmAddView} />
		<Route component={OopsView} />
	</Switch>
);
