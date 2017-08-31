import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import classNames from 'classnames';
import Dropdown from "../Dropdown/Dropdown";

export default class CurrencyScreen extends Component {

    static propTypes = {
        className: PropTypes.string,
        availableCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
        chosenCurrency: PropTypes.string.isRequired,
        onCurrencyChoose: PropTypes.func.isRequired,
        updateExchangeAmount: PropTypes.func.isRequired,
        exchangeAmount: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        balance: PropTypes.string.isRequired
    };

    onChange = (event) => {
        const value = event.target.value;
        this.props.updateExchangeAmount(value);
    };

    render() {
        const className = classNames({
            'CurrencyScreen': true,
            [this.props.className]: this.props.className
        });
        const onClick = this.props.onClick ? this.props.onClick : () => {};

        return (
            <div className={className} onClick={onClick}>
                <Dropdown
                    items={this.props.availableCurrencies}
                    selectedItem={this.props.chosenCurrency}
                    onItemChoose={this.props.onCurrencyChoose}
                />
                <div className="currency-screen-right">
                    <input className="currency-input"
                           onChange={this.onChange}
                           value={this.props.exchangeAmount}
                           type="number" />
                </div>
                <div className="balance">
                    <span>Balance: {this.props.balance}</span>
                </div>
            </div>
        );
    }

}
