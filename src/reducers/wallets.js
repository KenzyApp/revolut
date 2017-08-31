

import ActionTypes from "../actions/actionTypes";

const initialWallets = {
    PLN: {
        amount: 12,
        commaAmount: 90
    },
    GBP: {
        amount: 1,
        commaAmount: 39
    },
    USD: {
        amount: 2,
        commaAmount: 20
    },
    EUR: {
        amount: 3,
        commaAmount: 15
    }
};

export default (state=initialWallets, action) => {
    switch(action.type) {
        case ActionTypes.EXCHANGE:
            return {
                ...state,
                [action.firstCode]: {
                    amount: action.firstAmount,
                    commaAmount: action.firstAmountComma
                },
                [action.secondCode]: {
                    amount: action.secondAmount,
                    commaAmount: action.secondAmountComma
                }
            };
        default:
            return state;
    }
};
