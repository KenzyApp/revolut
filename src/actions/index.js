
import * as appActions from './appActions';
import * as currencyActions from './currencyActions';
import * as walletActions from './walletActions';

export default {
    ...appActions,
    ...currencyActions,
    ...walletActions
}
