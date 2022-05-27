import { combineReducers } from 'redux';

import user from './user';
import appearanceReducer from './appearance';

const rootReducers = combineReducers({
     user: user,
     appearance: appearanceReducer,
});

export default rootReducers;
