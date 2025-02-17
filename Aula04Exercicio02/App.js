import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Exemplo de App Interativo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />

      <Button title="Enviar" onPress={lidarComClique} />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
