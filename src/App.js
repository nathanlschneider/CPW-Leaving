import React, { Component } from 'react';
import './App.scss';
import Box from './Box';
import Footer from './Footer';
import Loader from './Loader';
import Alerter from './Alerter';
import Config from './Config';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errorMessage: null,
            online: false,
            offline: false,
            onLTE: false,
            onWAN: false,
            slideValue: undefined,
            loading: false,
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.handleOnlineFilter = this.handleOnlineFilter.bind(this);
        this.handleOfflineFilter = this.handleOfflineFilter.bind(this);
        this.handleOnWAN = this.handleOnWAN.bind(this);
        this.handleOnLTE = this.handleOnLTE.bind(this);
    }
    increase() {
        this.setState({ slideValue: this.state.slideValue + 10 });
    }
    decrease() {
        this.setState({ slideValue: this.state.slideValue - 10 });
    }

    handleChange(event) {
        this.setState({ slideValue: event.target.value });
        localStorage.setItem('slideValue', this.state.slideValue);
    }
    handleClick() {
        this.setState({ show: !this.state.show });
    }

    handleOnlineFilter() {
        this.setState({ online: !this.state.online });
    }
    handleOfflineFilter() {
        this.setState({ offline: !this.state.offline });
    }
    handleOnWAN() {
        this.setState({ onWan: !this.state.onWAN });
    }
    handleOnLTE() {
        this.setState({ onLTE: !this.state.onLTE });
    }

    componentDidMount() {
        const connect = () => {
            const socket = new WebSocket('ws://inspire.gr.mhgi.net:5556/connect');
            //const socket = new WebSocket('ws://localhost:5556/connect');

            socket.addEventListener('message', m => {
                this.setState({
                    data: JSON.parse(m.data),
                    loading: false
                });
            });

            socket.onopen = event => {
                console.log('Setting intial state on socket open');
                this.setState({
                    slideValue: localStorage.slideValue,
                    loading: true,
                    error: false
                });
            };

            socket.onclose = event => {
                this.setState({ error: true });
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason);
                setTimeout(function() {
                    connect();
                }, 10000);
            };

            socket.onerror = event => {
                this.setState({ error: true });
            };
        };
        connect();
    }

    render() {
        const icon = { fontSize: '24px' };

        // eslint-disable-next-line
        let boxes = this.state.data.map((datum, index) => {
            if (datum !== null && datum.account !== null && datum.name.length <= 4) {
                return (
                    <>
                        <Box
                            key={index}
                            name={datum.name}
                            status={datum.state}
                            account={datum.account}
                            conType={datum.conType}
                            size={this.state.slideValue}
                        />
                    </>
                );
            }
        });

        return (
            <>
                <div className='box__container'>
                    {boxes}
                    {this.state.show && (
                        <Config
                            onlineBox={
                                <input
                                    className='config_container-checkbox'
                                    type='checkbox'
                                    id='online'
                                    onChange={this.handleOnlineFilter}
                                />
                            }
                            offlineBox={
                                <input
                                    className='config_container-checkbox'
                                    type='checkbox'
                                    onChange={this.handleOfflineFilter}
                                />
                            }
                            LTEBox={
                                <input
                                    className='config_container-checkbox'
                                    type='checkbox'
                                    onChange={this.handleOnLTE}
                                />
                            }
                            WANBox={
                                <input
                                    className='config_container-checkbox'
                                    type='checkbox'
                                    onChange={this.handleOnWAN}
                                />
                            }
                            slider={
                                <input
                                    className='range_input'
                                    type='range'
                                    value={this.state.slideValue}
                                    onChange={this.handleChange}
                                />
                            }
                        />
                    )}
                    <Footer
                        button={
                            <>
                                <div className='menu-button' onClick={this.handleClick}>
                                    <div className='menu-button-bar' />
                                    <div className='menu-button-bar' />
                                    <div className='menu-button-bar' />
                                </div>
                            </>
                        }
                    />
                    <Alerter error={this.state.error} data='Connection Error' />
                    <Loader loading={this.state.loading} />
                </div>
            </>
        );
    }
}
export default App;
