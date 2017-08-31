
import ActionTypes from './actionTypes';


export const exchange = () => {
    return (dispatch, getState) => {
        const state = getState();
        const firstCode = state.app.firstSelectedCurrency;
        const secondCode = state.app.secondSelectedCurrency;

        const parsedFirstAmount = state.app.firstAmount.split('.');
        const firstAmount = parseInt(parsedFirstAmount[0]);
        const firstAmountComma = Math.round((parseFloat(state.app.firstAmount).toFixed(2) - firstAmount) * 100);

        const parseSecondAmount = state.app.secondAmount.split('.');
        const secondAmount = parseInt(parseSecondAmount[0]);
        const secondAmountComma = Math.round((parseFloat(state.app.secondAmount).toFixed(2) - secondAmount) * 100);

        let flag = 1;

        if (state.app.focusedCurrency !== firstCode) {
            flag = -1;
        }

        let updatedFirst = state.wallets[firstCode].amount - flag * firstAmount;
        let updatedFirstComma = state.wallets[firstCode].commaAmount - flag * firstAmountComma;

        if (updatedFirstComma >= 100) {
            updatedFirst++;
            updatedFirstComma -= 100;
        } else if (updatedFirstComma < 0) {
            updatedFirstComma = 100 + updatedFirstComma;
            updatedFirst--;
        }
        let updatedSecond = state.wallets[secondCode].amount + flag * secondAmount;
        let updatedSecondComma = state.wallets[secondCode].commaAmount + flag * secondAmountComma;
        if (updatedSecondComma >= 100) {
            updatedSecond++;
            updatedSecondComma -= 100;
        } else if (updatedSecondComma < 0) {
            updatedSecondComma = 100 + updatedSecondComma;
            updatedSecond--;
        }
        
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

