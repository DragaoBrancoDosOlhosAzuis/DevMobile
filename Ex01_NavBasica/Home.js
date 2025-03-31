import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define o tipo das props para o componente Home.
type Props = NativeStackScreenProps<RootStackParamList>;

// Componente Home que exibe a tela inicial.
export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      {/* Botão que navega para a tela Settings. */}
      <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}