// Importa as bibliotecas necessárias do React e React Native
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente funcional chamado EstoqueItem que recebe props: nome, quantidade, código e uma função onEditar
export default function EstoqueItem({ nome, quantidade, codigo, onEditar }) {
  return (
    // Cria uma View estilizada representando um item do estoque
    <View style={styles.item}>
      {/* Exibe o nome do item */}
      <Text style={styles.texto}>Nome: {nome}</Text>
      
      {/* Exibe o código do item */}
      <Text style={styles.texto}>Código: {codigo}</Text>
      
      {/* Exibe a quantidade disponível do item */}
      <Text style={styles.texto}>Quantidade: {quantidade}</Text>
      
      {/* Botão que executa a função onEditar ao ser pressionado */}
      <Button title="Editar" onPress={onEditar} />
    </View>
  );
}

// Objeto de estilos para estilizar o componente
const styles = StyleSheet.create({
  item: {
    borderWidth: 1,            // Borda com espessura 1
    borderRadius: 6,           // Borda com cantos arredondados
    padding: 10,               // Espaçamento interno
    marginBottom: 10,          // Espaço inferior entre os itens
    backgroundColor: '#f1f1f1' // Cor de fundo clara
  },
  texto: {
    fontSize: 16,             // Tamanho da fonte
    marginBottom: 5           // Espaçamento inferior entre os textos
  },
});
