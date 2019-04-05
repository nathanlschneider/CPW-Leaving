import React, { Component } from 'react';
import './ColorKey.scss';

export default class ColorKey extends Component {
    render() {
        return (
            <div className='key-container'>
                <div className='key-container--left'>
                    <div className='key-hours'>
                        <div>0h</div>
                        <div>4h</div>
                        <div>8h</div>
                        <div>12h</div>
                        <div>16h</div>
                        <div>18h</div>
                        <div>20h</div>
                        <div>24h</div>
                    </div>
                    <div className='color-key' />
                </div>
                
                <div className='key-container--right'>
                    <div className='key-right-label'>24+</div>
                    <div className='grey-block' />
                </div>
            </div>
        );
    }
}
