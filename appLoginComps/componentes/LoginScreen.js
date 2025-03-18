import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    title="Entrar"
                    onPress={() => this.props.onLogin(this.state.username, this.state.password)}
                />
            </View>
        );
    }
}
