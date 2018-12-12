import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import Actions
import { setWeb3 } from './AppActions';

//Import Selector
import { getWeb3 } from './AppReducer.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {account: null}
    }

    async componentDidUpdate(prevProps, prevState) {
        let accounts = await this.props.web3.eth.getAccounts();
        if(prevState.account !== accounts[0]){
            this.setState({account: accounts[0]});
        }
    }

    componentDidMount() {
        this.props.setWeb3();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Let's start to dev' this {this.state.account}!
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    web3: PropTypes.object.isRequired
}

const mapStateToProps = (store, ownProps) => {
    return {
        web3: getWeb3(store)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setWeb3: () => {
            dispatch(setWeb3())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);