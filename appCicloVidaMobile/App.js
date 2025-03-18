import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native'; // Importa StyleSheet para estilos

class MeuComponente extends Component {
    constructor(props) {
        super(props);
        // Inicializa o estado com mensagem, contador e controle de exibição
        this.state = { mensagem: 'Olá!', contador: 0, exibirComponente: true };
        console.log('constructor: Componente montado!'); // Log de montagem
    }

    componentDidMount() {
        // Chamado após o componente ser renderizado pela primeira vez
        console.log('componentDidMount: Componente montado!');
    }

    componentDidUpdate(prevProps, prevState) {
        // Chamado após o componente ser atualizado
        console.log('componentDidUpdate: Componente atualizado:', prevState, this.state);
    }

    componentWillUnmount() {
        // Chamado antes do componente ser desmontado
        console.log('componentWillUnmount: Componente desmontado!');
    }

    alteraMensagem = () => {
        // Atualiza o estado para alterar a mensagem
        this.setState({ mensagem: 'Nova mensagem!' });
    };

    incrementarContador = () => {
        // Atualiza o estado para incrementar o contador
        this.setState({ contador: this.state.contador + 1 });
    };

    exibirOuOcultarComponente = () => {
        // Atualiza o estado para alterar a exibição do componente
        this.setState({ exibirComponente: !this.state.exibirComponente });
    };

    shouldComponentUpdate(nextProps, nextState) {
        // Otimização: Renderiza apenas se o contador mudar
        if (this.state.contador !== nextState.contador) {
            console.log('shouldComponentUpdate: Contador mudou, renderizando');
            return true;
        }
        console.log('shouldComponentUpdate: Contador não mudou, ignorando renderização');
        return false;
    }

    render() {
        // Condicional para não renderizar se exibirComponente for falso
        if (!this.state.exibirComponente) {
            console.log('render: para não renderizar se exibirComponente.');
            return null;
        }

        // Renderiza o componente com mensagem, contador e botões
        console.log('render: renderiza Componente.');
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.mensagem}</Text>
                <Text style={styles.text}>Contador: {this.state.contador}</Text>
                <Button
                    title="Alterar Mensagem"
                    onPress={this.alteraMensagem}
                    style={styles.button}
                />
                <Button
                    title="Incrementar Contador"
                    onPress={this.incrementarContador}
                    style={styles.button}
                />
                <Button
                    title="Exibir/Ocultar Componente"
                    onPress={this.exibirOuOcultarComponente}
                    style={styles.button}
                />
            </View>
        );
    }
}

// Estilos para o componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0', // Cor de fundo leve
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333', // Cor do texto
    },
    button: {
        backgroundColor: '#007bff', // Cor de fundo do botão
        color: '#fff', // Cor do texto do botão
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
});

export default MeuComponente;
