import React, { Component } from 'react';
import './Config.scss';

export default class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show: null
        };
       
    }

componentDidMount(){
    this.setState({show: this.props.show});
}
    render() {
        return (
            <div className='config'>
                <div className='config_box'>
                    <div className='config_title'>Config</div>
                   {this.props.closeBtn}
                    <hr className='config_rule' />
                    <div className='config_container'>
                        <div className='config_container-left'>
                            <div className='config_container-label'>
                                online
                               {this.props.onlineBox}
                            </div>
                            <div className='config_container-label'>
                                offline
                                {this.props.offlineBox}
                            </div>
                            <div className='config_container-label'>
                                lte
                                {this.props.LTEBox}
                            </div>
                            <div className='config_container-label'>
                                wan
                               {this.props.WANBox}
                            </div>
                        </div>
                        <div className='config_container-right'>
                            filter
                            <input className='config_container-input' type='text' />
                            {this.props.slider}
                            <div className='range_group'>
                                <div className='range_text'>smaller</div>
                                <div className='range_text'>larger</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
