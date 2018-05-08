import { combineReducers } from 'redux';
import timelineReducer from './timeline.reducer';
import loginReducer from './login.reducer';
import notificationReducer from './notification.reducer';

export default combineReducers({
    timelineReducer,
    loginReducer,
    notificationReducer
})