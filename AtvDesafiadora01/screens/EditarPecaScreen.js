// Importa os hooks React e componentes da interface
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// Importa o array `estoque` e a função `editarQuantidade`
import { estoque, editarQuantidade } from '../data/estoque';

// Componente que representa a tela de edição de uma peça do estoque
export default function EditarPecaScreen({ route, navigation }) {
  // Recupera o parâmetro 'codigo' passado via navegação
  const { codigo } = route.params;

  // Estado local que armazena a peça atual a ser editada
  const [peca, setPeca] = useState(null);
  // Estado que armazena a nova quantidade digitada pelo usuário
  const [quantidade, setQuantidade] = useState('');

  // Hook useEffect executado ao montar o componente
  useEffect(() => {
    // Procura no estoque a peça com o código recebido
    const item = estoque.find(p => p.codigo === codigo);
    if (item) {
      // Se encontrar, atualiza os estados com os dados da peça
      setPeca(item);
      setQuantidade(item.quantidade.toString()); // converte para string para o TextInput
    }
  }, []);

  // Função chamada ao clicar em "Salvar Alterações"
  const salvar = () => {
    if (quantidade) {
      // Chama a função que altera a quantidade no estoque
      editarQuantidade(codigo, parseInt(quantidade));
      // Volta para a tela do estoque
      navigation.navigate('Estoque');
    } else {
      alert('Quantidade inválida!');
    }
  };

  // Enquanto os dados da peça não são carregados, mostra um texto simples
  if (!peca) return <Text>Carregando...</Text>;

  // Layout da tela de edição
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Peça</Text>
      <Text>Nome: {peca.nome}</Text>
      <Text>Código: {peca.codigo}</Text>

      {/* Campo para digitar nova quantidade */}
      <TextInput
        placeholder="Nova Quantidade"
        keyboardType="numeric"
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
      />

      {/* Botão para salvar as alterações */}
      <Button title="Salvar Alterações" onPress={salvar} />
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  titulo: { 
    fontSize: 22, 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5 
  },
});
