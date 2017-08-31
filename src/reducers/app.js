
import ActionTypes from "../actions/actionTypes";


const initialApp = {
    firstSelectedCurrency: 'GBP',
    secondSelectedCurrency: 'PLN',
    firstAmount: '',
    secondAmount: '',
    focusedCurrency: 'GBP',
};

export default (state=initialApp, action) => {
    switch(action.type) {
        case ActionTypes.SELECT_FIRST_CURRENCY:
            let secondSelectedCurrency = state.secondSelectedCurrency;
            if (state.secondSelectedCurrency === action.currency) {
                secondSelectedCurrency = state.firstSelectedCurrency;
            }
            return {
                ...state,
                firstSelectedCurrency: action.currency,
                secondSelectedCurrency
            };
        case ActionTypes.SELECT_SECOND_CURRENCY:
            let firstSelectedCurrency = state.firstSelectedCurrency;
            if (state.firstSelectedCurrency === action.currency) {
                firstSelectedCurrency = state.secondSelectedCurrency;
            }
            return {
                ...state,
                firstSelectedCurrency,
                secondSelectedCurrency: action.currency
            };
        case ActionTypes.SET_AMOUNTS:
            return {
                ...state,
                firstAmount: action.firstAmount,
                secondAmount: action.secondAmount
            };
        case ActionTypes.FOCUS_ON_CURRENCY:
            return {
                ...state,
                focusedCurrency: action.currency
            };
        default:
            return state;
    }
}
