import React, { Component } from 'react';
import { View } from 'react-native';
import LoginScreen from './componentes/LoginScreen';
import CadastroScreen from './componentes/CadastroScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '', password: '' };
    }

    handleLogin = (username, password) => {
        this.setState({ loggedIn: true, username, password });
    };

    handleVoltar = () => {
        this.setState({ loggedIn: false, username: '', password: '' });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.loggedIn ? (
                    <CadastroScreen
                        onVoltar={this.handleVoltar}
                        username={this.state.username}
                        password={this.state.password}
                    />
                ) : (
                    <LoginScreen onLogin={this.handleLogin} />
                )}
            </View>
        );
    }
}
