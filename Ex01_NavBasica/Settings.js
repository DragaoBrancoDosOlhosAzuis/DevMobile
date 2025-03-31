import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define o tipo das props para o componente Settings.
type Props = NativeStackScreenProps<RootStackParamList>;

// Componente Settings que exibe a tela de configurações.
export default function Settings({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>
      {/* Botão que navega para a tela Home. */}
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}