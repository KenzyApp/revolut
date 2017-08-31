
import ActionTypes from "../actions/actionTypes";

const initialCurrencies = {
    PLN: {
        name: 'zloty',
        rate: 4.5
    },
    GBP: {
        name: 'pound',
        rate: 1.3
    },
    USD: {
        name: 'us dollar',
        rate: 1.1
    },
    EUR: {
        name: 'euro',
        rate: 1
    }
};

export default (state = initialCurrencies, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_RATES:
            let currencies = {};
            Object.keys(state).forEach((currencyCode) => {
                currencies[currencyCode] = {
                    name: state[currencyCode].name,
                    rate: action.rates[currencyCode]
                }
            });
            return {
                ...currencies
            };

        default:
            return state;
    }
};