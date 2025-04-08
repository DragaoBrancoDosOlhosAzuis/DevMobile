// Importa React e o hook useState para gerenciar estados locais
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// Importa a função que adiciona uma peça ao estoque
import { adicionarPeca } from '../data/estoque';

// Componente da tela para adicionar uma nova peça
export default function AdicionarPecaScreen({ navigation }) {
  // Estados locais para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigo, setCodigo] = useState('');

  // Função chamada ao clicar no botão "Salvar"
  const salvar = () => {
    // Verifica se todos os campos foram preenchidos
    if (nome && quantidade && codigo) {
      // Adiciona a nova peça ao estoque convertendo `quantidade` para número inteiro
      adicionarPeca({ nome, quantidade: parseInt(quantidade), codigo });
      // Navega de volta para a tela "Estoque"
      navigation.navigate('Estoque');
    } else {
      // Mostra um alerta se algum campo estiver vazio
      alert('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Nova Peça</Text>
      
      {/* Campo de entrada para o nome da peça */}
      <TextInput 
        placeholder="Nome" 
        style={styles.input} 
        onChangeText={setNome} 
      />

      {/* Campo de entrada para a quantidade (somente números) */}
      <TextInput 
        placeholder="Quantidade" 
        keyboardType="numeric" 
        style={styles.input} 
        onChangeText={setQuantidade} 
      />

      {/* Campo de entrada para o código da peça */}
      <TextInput 
        placeholder="Código" 
        style={styles.input} 
        onChangeText={setCodigo} 
      />

      {/* Botão que chama a função salvar */}
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,           // Ocupa toda a altura da tela
    padding: 20        // Espaçamento interno
  },
  titulo: {
    fontSize: 22,      // Tamanho grande para o título
    marginBottom: 10,  // Espaço abaixo do título
    textAlign: 'center'// Centraliza o texto
  },
  input: {
    borderWidth: 1,    // Borda em volta do campo
    padding: 10,       // Espaço interno do campo
    marginBottom: 10,  // Espaço abaixo de cada campo
    borderRadius: 5    // Bordas levemente arredondadas
  },
});
