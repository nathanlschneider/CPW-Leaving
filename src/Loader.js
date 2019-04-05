import React, { Component } from 'react';
import './Loader.scss';

export default class Loader extends Component {
    render() {
        return <div className='loader-container' style={{opacity: this.props.loading ? '1' : '0'}}>
            <div className="loader" />
        </div>
    }
}