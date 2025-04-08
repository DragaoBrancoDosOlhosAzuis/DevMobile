// Importa os hooks e componentes do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Componente da tela de login
export default function LoginScreen({ navigation }) {
  // Estados para armazenar o nome do usuário e a senha digitados
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Função que faz a autenticação básica
  const autenticar = () => {
    // Verifica se o usuário e senha estão corretos (validação simples)
    if (usuario === 'admin' && senha === '123') {
      navigation.navigate('Estoque'); // Navega para a tela de estoque
    } else {
      alert('Usuário ou senha incorretos!'); // Exibe um alerta em caso de erro
    }
  };

  // Interface da tela de login
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      {/* Campo de entrada do usuário */}
      <TextInput 
        placeholder="Usuário" 
        style={styles.input} 
        onChangeText={setUsuario} 
      />

      {/* Campo de entrada da senha, com ocultação de caracteres */}
      <TextInput 
        placeholder="Senha" 
        secureTextEntry 
        style={styles.input} 
        onChangeText={setSenha} 
      />

      {/* Botão de login */}
      <Button title="Entrar" onPress={autenticar} />

      {/* Link para a tela de recuperação de senha */}
      <Text 
        style={styles.link} 
        onPress={() => navigation.navigate('RecuperarSenha')}
      >
        Esqueci a senha
      </Text>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  titulo: { 
    fontSize: 24, 
    textAlign: 'center', 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10, 
    borderRadius: 5 
  },
  link: { 
    color: 'blue', 
    textAlign: 'center', 
    marginTop: 10 
  },
});
