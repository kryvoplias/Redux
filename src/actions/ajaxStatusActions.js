import * as types from './actionTypes';

export function beginAjaxCall(authors) {
    return { type: types.BEGIN_AJAX_CALL };
}