// Importa os hooks do React e componentes visuais do React Native
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// Importa a lista de peças do estoque
import { estoque } from '../data/estoque';
// Importa o componente visual para exibir cada item do estoque
import EstoqueItem from '../components/EstoqueItem';

// Componente da tela que exibe o estoque completo
export default function EstoqueScreen({ navigation }) {
  // Estado que vai armazenar a lista atual do estoque
  const [lista, setLista] = useState([]);

  // useEffect com um listener para atualizar a lista sempre que a tela ganhar foco
  useEffect(() => {
    // Quando a tela voltar ao foco, atualiza a lista com o conteúdo mais recente do estoque
    const unsubscribe = navigation.addListener('focus', () => {
      setLista([...estoque]); // Cria uma nova cópia da lista
    });

    // Remove o listener quando o componente for desmontado
    return unsubscribe;
  }, [navigation]);

  // Renderização da tela
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque Atual</Text>

      {/* FlatList para exibir todos os itens da lista do estoque */}
      <FlatList
        data={lista} // Fonte de dados
        keyExtractor={item => item.codigo} // Chave única para cada item
        renderItem={({ item }) => (
          // Renderiza o componente EstoqueItem para cada item
          <EstoqueItem
            nome={item.nome}
            codigo={item.codigo}
            quantidade={item.quantidade}
            onEditar={() => navigation.navigate('EditarPeca', { codigo: item.codigo })} // Navega para tela de edição
          />
        )}
      />

      {/* Botão para navegar até a tela de adicionar uma nova peça */}
      <Button title="Adicionar Nova Peça" onPress={() => navigation.navigate('AdicionarPeca')} />
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
});
