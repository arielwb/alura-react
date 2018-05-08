import { notificationActions } from '../actions';

export default function notificationReducer(state = null, action) {
    if (action.type === notificationActions.notify) {
        return action.msg;
    }

    return state;
}