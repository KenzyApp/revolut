import {combineReducers} from 'redux';

const initialCurrencies = {
   test: 'tmp'
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


