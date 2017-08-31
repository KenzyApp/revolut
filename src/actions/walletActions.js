
import ActionTypes from './actionTypes';
import Utils from "../utils";

export const exchange = () => {
    return (dispatch, getState) => {
        const state = getState();
        const firstCode = state.app.firstSelectedCurrency;
        const secondCode = state.app.secondSelectedCurrency;

        const [firstAmount, firstAmountComma] = Utils.parseAmount(state.app.firstAmount);
        const [secondAmount, secondAmountComma] = Utils.parseAmount(state.app.secondAmount);

        let flag = state.app.focusedCurrency === firstCode ? 1 : -1;

        const [updatedFirst, updatedFirstComma] = Utils.calculateAmount(
            state.wallets[firstCode].amount,
            state.wallets[firstCode].commaAmount,
            firstAmount,
            firstAmountComma,
            flag
        );

        const [updatedSecond, updatedSecondComma] = Utils.calculateAmount(
            state.wallets[secondCode].amount,
            state.wallets[secondCode].commaAmount,
            secondAmount,
            secondAmountComma,
            -flag
        );
        dispatch({
            type: ActionTypes.EXCHANGE,
            firstCode,
            secondCode,
            firstAmount: updatedFirst,
            firstAmountComma: updatedFirstComma,
            secondAmount: updatedSecond,
            secondAmountComma: updatedSecondComma
        });
    }
};

