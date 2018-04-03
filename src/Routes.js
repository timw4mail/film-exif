import { Route, Switch } from 'inferno-router';

import * as V from './views';

export const Routes = (props) => (
	<Switch>
		<Route component={V.OopsView} />
		<Route exact path='/' component={V.HomeView} />
	</Switch>
);
