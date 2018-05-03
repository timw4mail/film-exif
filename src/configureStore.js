/**
 * Redux setup
 */
import { combineReducers, createStore } from 'redux';

import * as reducers from '//reducers';

const configureStore = (defaultState = {}) => {
	return createStore(combineReducers({
		...reducers,
	}), defaultState);
};

export default configureStore;
