// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Define o componente funcional App
const App = () => {
  // Estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState('');
  // Estado para armazenar a mensagem gerada após a interação do usuário
  const [mensagem, setMensagem] = useState('');

  // Função chamada quando o botão "Enviar" é pressionado
  const lidarComClique = () => {
    // Verifica se o campo 'nome' não está vazio antes de exibir a mensagem
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (
    // ScrollView permite rolagem caso o conteúdo seja maior que a tela
    <ScrollView style={styles.container}>
      {/* View principal que contém a imagem e o texto introdutório */}
      <View style={styles.view}>
        {/* Exibe uma imagem carregada da internet */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        {/* Texto informativo sobre o exemplo */}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>

      {/* Campo de entrada para digitação do nome */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome} // Atualiza o estado 'nome' conforme o usuário digita
          value={nome} // Define o valor do campo com base no estado 'nome'
        />
        {/* Botão para exibir a saudação personalizada */}
        <Button title="Enviar" onPress={lidarComClique} />
      </View>

      {/* Exibe a mensagem apenas se o usuário tiver digitado algo */}
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      {/* Botão customizado com estilo diferenciado */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos dos componentes para melhor organização visual
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20, // Adiciona espaçamento interno
  },
  view: {
    alignItems: 'center', // Centraliza os elementos
    marginBottom: 20, // Adiciona espaço inferior
  },
  image: {
    width: 100, // Define a largura da imagem
    height: 100, // Define a altura da imagem
    marginBottom: 10, // Adiciona espaço inferior
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte
    fontWeight: 'bold', // Aplica negrito ao texto
    marginBottom: 20, // Adiciona espaço inferior
  },
  inputContainer: {
    marginBottom: 20, // Adiciona espaço inferior
  },
  input: {
    height: 40, // Define a altura do campo de entrada
    borderColor: 'gray', // Define a cor da borda
    borderWidth: 1, // Define a espessura da borda
    marginBottom: 10, // Adiciona espaço inferior
    paddingHorizontal: 10, // Adiciona espaçamento interno lateral
  },
  messageContainer: {
    marginBottom: 20, // Adiciona espaço inferior
  },
  message: {
    fontSize: 16, // Define o tamanho da fonte da mensagem
  },
  button: {
    backgroundColor: 'blue', // Define a cor de fundo do botão
    padding: 10, // Adiciona espaçamento interno
    borderRadius: 5, // Arredonda os cantos do botão
    alignItems: 'center', // Centraliza o texto dentro do botão
  },
  buttonText: {
    color: 'white', // Define a cor do texto do botão
    fontSize: 16, // Define o tamanho da fonte do botão
    fontWeight: 'bold', // Deixa o texto em negrito
  },
});

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
