import * as actionTypes from '../actionsConstant';
const initialState = {
    results: []
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT: return {
            ...state,
            results: state.results.concat(action.result)
        }

        default: return state;
    }
}

export default reducer;