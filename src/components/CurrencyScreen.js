import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import classNames from 'classnames';

export default class CurrencyScreen extends Component {

    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const className = classNames({
            'CurrencyScreen': true,
            [this.props.className]: this.props.className
        });

        return (
            <div className={className}>
                CurrencyScreen
            </div>
        );
    }

}
