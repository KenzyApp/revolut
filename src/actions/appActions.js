import ActionTypes from './actionTypes';
import Utils from "../utils";


export const selectFirstCurrency = (currency) => {
    return {
        type: ActionTypes.SELECT_FIRST_CURRENCY,
        currency
    }
};

export const selectSecondCurrency = (currency) => {
    return {
        type: ActionTypes.SELECT_SECOND_CURRENCY,
        currency
    }
};

const getAmounts = (getState, amount) => {
    const state = getState();
    let firstAmount = amount;
    let secondAmount = amount;

    if (state.app.focusedCurrency === state.app.firstSelectedCurrency) {
        secondAmount = Utils.exchange(
            state.currencies[state.app.secondSelectedCurrency].rate,
            state.currencies[state.app.firstSelectedCurrency].rate,
            amount
        );
    } else {
        firstAmount = Utils.exchange(
            state.currencies[state.app.firstSelectedCurrency].rate,
            state.currencies[state.app.secondSelectedCurrency].rate,
            amount
        );
    }
    return {
        firstAmount,
        secondAmount
    };
};

export const setAmounts = (amount) => {
    if (amount < 0) {
        return {
            type: ActionTypes.SET_AMOUNTS,
            firstAmount: "",
            secondAmount: ""
        }
    }
    return (dispatch, getState) => {
        const amounts = getAmounts(getState, amount);

        dispatch({
            type: ActionTypes.SET_AMOUNTS,
            ...amounts
        });
    }
};

export const updateExchangeAmount = (amount) => {
    return {
        type: ActionTypes.UPDATE_EXCHANGE_AMOUNT,
        amount
    }
};

export const focusOnCurrency = (currency) => {
    return {
        type: ActionTypes.FOCUS_ON_CURRENCY,
        currency
    }
};
