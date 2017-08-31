import {combineReducers} from 'redux';
import currencies from './currencies';
import wallets from './wallets';
import app from './app';

export default combineReducers({
    currencies,
    wallets,
    app
});


