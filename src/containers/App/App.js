import React, {Component} from 'react';
import CurrencyScreen from "../../components/CurrencyScreen";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        currencies: state.currencies
    })
};

@connect(mapStateToProps, null)
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CurrencyScreen/>
            </div>
        );
    }
}

