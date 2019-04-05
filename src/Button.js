import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            isHidden: false
        }
    }

    componentDidMount() {
      this.setState({value: this.props.value})
  }

    render() {
        return (
            <button className={this.state.isHidden === true ? 'display-none' : 'display-block'}>{this.state.value}</button>
        )
    }
}
