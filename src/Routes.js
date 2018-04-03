import { Route, Switch } from 'inferno-router';

import * as V from './views';

export const Routes = (props) => (
	<Switch>
		<Route exact path='/' component={V.HomeView} />
		<Route path="/camera" component={V.CameraListView} />
		<Route path="/film" component={V.FilmAddView} />
		<Route component={V.OopsView} />
	</Switch>
);
