import {combineReducers} from 'redux';
import currencies from './currencies';
import wallets from './wallets';


export default combineReducers({
    currencies,
    wallets
});


