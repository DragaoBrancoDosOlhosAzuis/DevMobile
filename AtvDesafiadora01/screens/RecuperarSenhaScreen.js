// screens/RecuperarSenhaScreen.js

// Importa os módulos necessários do React Native e a função personalizada de busca de usuário
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { encontrarUsuario } from '../data/usuarios';

// Componente da tela de recuperação de senha
export default function RecuperarSenhaScreen({ navigation }) {
  // Estado para armazenar o nome digitado pelo usuário
  const [usuario, setUsuario] = useState('');

  // Estado para armazenar a senha recuperada (se encontrada)
  const [senhaRecuperada, setSenhaRecuperada] = useState(null);

  // Função que executa o processo de recuperação de senha
  const recuperarSenha = () => {
    // Valida se o campo está vazio
    if (usuario.trim() === '') {
      alert('Informe o nome de usuário.');
      return;
    }

    // Procura o usuário na base de dados
    const usuarioEncontrado = encontrarUsuario(usuario.trim());

    // Se encontrado, exibe a senha; senão, informa que o usuário não foi achado
    if (usuarioEncontrado) {
      setSenhaRecuperada(usuarioEncontrado.senha);
    } else {
      setSenhaRecuperada(null);
      alert('Usuário não encontrado.');
    }
  };

  // Interface da tela
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recuperar Senha</Text>

      {/* Campo de entrada do nome de usuário */}
      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUsuario}
        autoCapitalize="none" // impede que o texto seja capitalizado automaticamente
      />

      {/* Botão para iniciar a recuperação */}
      <Button title="Recuperar" onPress={recuperarSenha} />

      {/* Se a senha for encontrada, exibe na tela */}
      {senhaRecuperada && (
        <Text style={styles.senha}>
          Sua senha é: <Text style={{ fontWeight: 'bold' }}>{senhaRecuperada}</Text>
        </Text>
      )}

      {/* Botão para retornar à tela de login */}
      <Button title="Voltar para o Login" onPress={() => navigation.navigate('Login')} />
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
  senha: { 
    marginTop: 20, 
    textAlign: 'center', 
    fontSize: 16, 
    color: 'green' 
  },
});
