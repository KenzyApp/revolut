import ActionTypes from './actionTypes';

export const updateCurrencies = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                'https://openexchangerates.org/api/latest.json?app_id=8c04b60715f24a53badd009cd29bc7aa',
            );
            response = await response.json();
            dispatch({
                type: ActionTypes.UPDATE_RATES,
                rates: response.rates
            })
        } catch (err) {
            console.error(err);
        }
    };
};

