// I assume base currency GBP

const initialCurrencies = {
    PLN: {
        name: 'zloty',
        rate: 4.5
    },
    GBP: {
        name: 'pound',
        rate: 1
    }
};

export default (state = initialCurrencies, action) => {
    switch (action.type) {
        default:
            return state;
    }
};