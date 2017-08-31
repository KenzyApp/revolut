import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import classNames from 'classnames';

export default class Dropdown extends Component {

    static propTypes = {
        className: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        selectedItem: PropTypes.string.isRequired,
        onItemChoose: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    onClick = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    };

    render() {
        const className = classNames({
            'Dropdown': true,
            [this.props.className]: this.props.className
        });
        const options = this.props.items.filter(
            (item) => item !== this.props.selectedItem);
        const onItemChoose = this.props.onItemChoose ?
            this.props.onItemChoose : () => {};

        return(
            <div className={className}>
                <span className="dropdown-selected-item" onClick={this.onClick}>
                    {this.props.selectedItem}
                    </span>
                {this.state.isExpanded && <div className="dropdown-items">
                    {options.map((item, index) => {
                        return (
                            <span key={index}
                                onClick={() => {onItemChoose(item)}}>
                                    {item}
                            </span>
                        )
                    })}
                </div>}
            </div>
        )
    }

}


