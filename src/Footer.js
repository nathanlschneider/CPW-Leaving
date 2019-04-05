import React, { Component } from 'react';
import './Footer.scss';
import ColorKey from './ColorKey';


export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    static defaultProps = {};

    componentDidMount() {}

    render() {
        return (
            <nav className="nav-bar">
                <h1 className="logo">Cradlepoint Watcher v.07</h1>
                <ColorKey />
                {this.props.button}
            </nav>
        );
    }
}
