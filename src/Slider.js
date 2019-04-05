import React, { Component } from 'react';
//import './Slider.scss';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideValue: 0
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState({ slideValue: this.slideValue + 10 });
    }
    decrease() {
        this.setState({ slideValue: this.slideValue - 10 });
    }

    render() {
        const icon = { fontSize: '24px' };
        return (
            <>
                <span style={icon} onClick={this.increase}>
                    +
                </span>{' '}
                <input
                    type='range'
                    min='1'
                    max='100'
                    step='1'
                    value={this.state.slideValue}
                    onChange={this.handleChange}
                />{' '}
                <span style={icon} onClick={this.decrease}>
                    -
                </span>
            </>
        );
    }
}
