import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  //Slider,
  FlatList,
  SectionList,
  ActivityIndicator,
  Switch,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const App = () => {
  // Estado para armazenar o texto digitado no TextInput
  const [text, setText] = useState('');
  // Estado para controlar o carregamento (exibir ou não o ActivityIndicator)
  const [isLoading, setIsLoading] = useState(false);
  // Estado para armazenar o valor do Slider
  //const [sliderValue, setSliderValue] = useState(0);
  // Estado para controlar o estado do Switch (ligado/desligado)
  const [switchValue, setSwitchValue] = useState(false);

  // Dados para o FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para o SectionList, divididos em seções
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Section 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Função para simular um carregamento ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* ImageBackground para exibir uma imagem de fundo com um título */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Exemplo de Código React Native</Text>
      </ImageBackground>

      <View style={styles.content}>
        {/* Exibe uma imagem */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />

        {/* TextInput para entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />

        {/* Botão que ao ser pressionado chama a função handlePress */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* TouchableOpacity que exibe um alerta ao ser pressionado */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('TouchableOpacity pressionado')}
        >
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* ActivityIndicator que é exibido enquanto isLoading for true */}
        <ActivityIndicator animating={isLoading} />

        {/* Slider para selecionar um valor dentro de um intervalo */}
       

        {/* Switch para alternar entre ligado e desligado */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        {/* FlatList para renderizar uma lista de itens */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        {/* SectionList para renderizar uma lista dividida em seções */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
