

const initialWallets = {
    PLN: {
        amount: 12,
        commaAmount: 20
    },
    GBP: {
        amount: 1,
        commaAmount: 39
    }
};

export default (state=initialWallets, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
