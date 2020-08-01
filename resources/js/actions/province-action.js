import * as types from './action-types';

//GET LIST OF PROVINCES
export function requestProvinces() {
    return {
        type: types.REQUEST_PROVINCES
    }
}

export function getProvincesSuccess(provinces) {
    return {
        type: types.GET_PROVINCES_SUCCESS,
        provinces
    }
}

export function requestProvincesFailed() {
    return {
        type: types.REQUEST_PROVINCES_FAILED
    }
}

// ADD NEW PROVINCES
export function requestAddProvinces(values) {
    return {
        type: types.REQUEST_ADD_PROVINCES,
        values
    }
}

export function addProvincesSuccess(values, message) {
    return {
        type: types.ADD_PROVINCES_SUCCESS,
        values,
        message
    }
}

//EDIT PROVINCES
export function requestUpdateProvinces( values) {
    return {
        type: types.REQUEST_EDIT_PROVINCES,
        values
    }
}

export function updateProvincesSuccess(provinceId, values, message) {
    return {
        type: types.EDIT_PROVINCES_SUCCESS,
        values, provinceId, message
    }
}

//DELETE PROVINCES ACTION
export function requestDeleteProvinces(provinceId) {
    return {
        type: types.REQUEST_DELETE_PROVINCES,
        provinceId
    }
}

export function deleteProvincesSuccess(provinceId, message) {
    return {
        type: types.DELETE_PROVINCES_SUCCESS,
        provinceId, message
    }
}
