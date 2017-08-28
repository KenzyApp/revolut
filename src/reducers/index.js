import {combineReducers} from 'redux';

const initialCurrencies = {
    PLN: {
       name: 'zloty'
    },
    GBP: {
       name: 'pound'
    }
};

const currencies = (state=initialCurrencies, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    currencies
});


