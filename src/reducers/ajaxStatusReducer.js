import * as types from '../actions/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSucces = (type) => {
    return type.endsWith('_SUCCESS');
};

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (actionTypeEndsInSucces(action.type)) {
        return state - 1;
    }
    return state;
} 