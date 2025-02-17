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
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';

// Define o componente funcional principal do aplicativo
const App = () => {
  // Estado para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');

  // Estado para armazenar a lista de itens, começando com três itens iniciais
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Define a estrutura de seções para a SectionList
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Função chamada ao pressionar o botão TouchableOpacity
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    // Permite a rolagem do conteúdo da tela
    <ScrollView style={styles.container}>
      {/* Exibe um bloco de visualização com um texto e uma imagem */}
      <View style={styles.view}>
        <Text style={styles.text}>Texto de exemplo</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Imagem do logo do React Native
          style={styles.image}
        />
      </View>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.textInput}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText} // Atualiza o estado conforme o usuário digita
      />

      {/* Botão que dispara um alerta ao ser pressionado */}
      <Button title="Clique aqui" onPress={handlePress} />

      {/* Botão personalizado usando TouchableOpacity */}
      <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
        <Text style={styles.touchableOpacityText}>Toque aqui</Text>
      </TouchableOpacity>

      {/* Lista simples de itens usando FlatList */}
      <FlatList
        data={items} // Define os itens da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item
        keyExtractor={(item) => item.id.toString()} // Define a chave única de cada item
      />

      {/* Lista de seções usando SectionList */}
      <SectionList
        sections={sections} // Define as seções da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza os itens dentro de cada seção
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text> // Exibe o título da seção
        )}
        keyExtractor={(item) => item.id.toString()} // Define a chave única de cada item
      />
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela disponível
    padding: 20, // Adiciona espaçamento interno
  },
  view: {
    marginBottom: 20, // Adiciona margem inferior
  },
  text: {
    fontSize: 20, // Define o tamanho do texto
    marginBottom: 10, // Adiciona margem inferior
  },
  image: {
    width: 100, // Define a largura da imagem
    height: 100, // Define a altura da imagem
    marginBottom: 10, // Adiciona espaçamento abaixo da imagem
  },
  textInput: {
    height: 40, // Define a altura do campo de entrada
    borderColor: 'gray', // Define a cor da borda
    borderWidth: 1, // Define a largura da borda
    marginBottom: 10, // Adiciona espaçamento abaixo do campo
    paddingHorizontal: 10, // Adiciona espaçamento interno lateral
  },
  touchableOpacity: {
    backgroundColor: 'blue', // Define a cor de fundo do botão como azul
    padding: 10, // Adiciona espaçamento interno
    borderRadius: 5, // Arredonda as bordas do botão
    marginBottom: 20, // Adiciona margem inferior
  },
  touchableOpacityText: {
    color: 'white', // Define a cor do texto do botão como branco
    textAlign: 'center', // Centraliza o texto dentro do botão
  },
  sectionHeader: {
    fontSize: 18, // Define o tamanho da fonte do cabeçalho da seção
    fontWeight: 'bold', // Define a fonte como negrito
    marginTop: 20, // Adiciona margem superior
    marginBottom: 10, // Adiciona margem inferior
  },
});

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
