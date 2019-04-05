import React, { Component } from 'react';
import './Alerter.scss';
export default class Alerter extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            error: null
          };
    }

    componentDidMount() {
         
    }
    componentWillUnmount() {
        
    }
    
    render() {
        if (this.props.error) {
            return (
                <div className='alerter-box'>
                    <h1>{this.props.data}</h1>
                </div>
            );
        } else {
            return null;
        }
    }
}
