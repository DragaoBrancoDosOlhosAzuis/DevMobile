import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, BackHandler } from 'react-native';
import styles from './styles';

export default class CadastroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { nome: '', endereco: '', cidade: '', cep: '', telefone: '' };
    }

    imprimirDados = () => {
        const { nome, endereco, cidade, cep, telefone } = this.state;
        const { username, password } = this.props;
        Alert.alert(
            'Dados do Cadastro',
            `Usuário: ${username}\nSenha: ${password}\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}\nTelefone: ${telefone}`,
            [{ text: 'OK' }]
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput style={styles.input} placeholder="Nome" onChangeText={(nome) => this.setState({ nome })} />
                <TextInput style={styles.input} placeholder="Endereço" onChangeText={(endereco) => this.setState({ endereco })} />
                <TextInput style={styles.input} placeholder="Cidade" onChangeText={(cidade) => this.setState({ cidade })} />
                <TextInput style={styles.input} placeholder="CEP" onChangeText={(cep) => this.setState({ cep })} />
                <TextInput style={styles.input} placeholder="Telefone" onChangeText={(telefone) => this.setState({ telefone })} />
                <View style={styles.buttonContainer}>
                    <Button title="Imprimir" onPress={this.imprimirDados} />
                    <Button title="Voltar" onPress={() => this.props.onVoltar()} />
                    <Button
                        title="Sair"
                        onPress={() => {
                            if (Platform.OS === 'android') {
                                BackHandler.exitApp();
                            } else {
                                Alert.alert('Sair', 'Para sair, feche o app manualmente.');
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}
