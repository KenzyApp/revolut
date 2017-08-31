import React, {Component} from 'react';
import CurrencyScreen from "../../components/CurrencyScreen/CurrencyScreen";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../actions/';
import classNames from 'classnames';

const mapStateToProps = (state) => {
    return ({
        currencies: state.currencies,
        firstSelectedCurrency: state.app.firstSelectedCurrency,
        secondSelectedCurrency: state.app.secondSelectedCurrency,
        firstAmount: state.app.firstAmount,
        secondAmount: state.app.secondAmount,
        focusedCurrency: state.app.focusedCurrency,
    })
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectFirstCurrency: actions.selectFirstCurrency,
        selectSecondCurrency: actions.selectSecondCurrency,
        focusOnCurrency: actions.focusOnCurrency,
        updateCurrencies: actions.updateCurrencies,
        setAmounts: actions.setAmounts,
        exchange: () => {}
    }, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

    async componentDidMount() {
        await this.props.updateCurrencies();
        setInterval(this.props.updateCurrencies, 60000);
    }

    setFocus = (currency) => {
        console.log('currency: ', currency);
        this.props.focusOnCurrency(currency);
    };

    render() {
        const availableCurrencies = Object.keys(this.props.currencies);
        const firstCurrencyClassname = classNames({
            "currency-widget": true,
            "focused": this.props.firstSelectedCurrency === this.props.focusedCurrency
        });
        const secondCurrencyClassname = classNames({
            "currency-widget": true,
            "focused": this.props.secondSelectedCurrency === this.props.focusedCurrency
        });

        return (
            <div className="App">
                <div className="top-panel">
                    {/*doing nothing in my case*/}
                    <span className="exchange-cancel">X</span>
                    <span className="exchange-title">Exchange</span>
                    <img
                        className="exchange-icon"
                        onClick={this.props.exchange}
                        alt=""
                        src={process.env.PUBLIC_URL + 'exchange.svg'} />
                </div>

                <div className="app-content">

                    <CurrencyScreen
                        availableCurrencies={availableCurrencies}
                        chosenCurrency={this.props.firstSelectedCurrency}
                        className={firstCurrencyClassname}
                        onCurrencyChoose={this.props.selectFirstCurrency}
                        updateExchangeAmount={this.props.setAmounts}
                        exchangeAmount={this.props.firstAmount}
                        onClick={() => {this.setFocus(
                            this.props.firstSelectedCurrency)}}
                    />
                    <CurrencyScreen
                        availableCurrencies={availableCurrencies}
                        chosenCurrency={this.props.secondSelectedCurrency}
                        className={secondCurrencyClassname}
                        onCurrencyChoose={this.props.selectSecondCurrency}
                        updateExchangeAmount={this.props.setAmounts}
                        exchangeAmount={this.props.secondAmount}
                        onClick={() => {this.setFocus(
                            this.props.secondSelectedCurrency)}}
                    />

                </div>
            </div>
        );
    }
}

