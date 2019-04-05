import React, { Component } from 'react';
import './Box.scss';
export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: false,
            data: null,
            size: null,
            filter: null,
            changeCounter: 0
        };
    }

    componentDidMount() {
        this.setState({filter: this.props.filter});
        setInterval(() => {
            this.setState({ changeCounter: 0 });
        }, 86400000);
    }

    componentDidUpdate(prevProps) {
        let changer = this.state.changeCounter;
        if (prevProps.conType !== this.props.conType) {
            this.setState({ change: true });
            this.setState({ changeCounter: changer++ });
        }
    }

    render() {
        // if (
        //     this.props.conType !== this.state.filter ||
        //     this.props.name === '904' ||
        //     this.props.name === '906' ||
        //     this.props.name.length > 3
        // ) {
        //     return null;
        // }
        return (
            <>
                <div
                    className='box-wrapper'
                    style={{
                        zoom: `${this.props.size}%`,
                    //    display: this.state.filter ? 'block' : 'none'
                        
                    }}
                >
                    <div
                        className='device-box'
                        style={{
                            background: this.props.account === '28784' ? '#3073B1' : null,
                            opacity: this.props.status === 'offline' ? '.2' : '1'
                        }}
                    >
                        <div className='device-name'>{this.props.name}</div>
                        <div
                            className='device-conType'
                            style={{
                                color: this.props.conType === 'LTE' ? '#f66464' : null
                            }}
                        >
                            {this.props.conType} {this.state.changeCounter !== 0 ? this.state.changeCounter : null}
                        </div>
                        <div
                            className='secondary'
                            style={{ animation: this.state.change ? 'longColorFade 86400000ms' : null }}
                        >
                            <div className='device-status'>{this.props.status}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
