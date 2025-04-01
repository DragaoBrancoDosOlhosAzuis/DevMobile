import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define o tipo das props para o componente Details.
type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: Props) {
    // Extrai o parâmetro 'title' passado pela tela Home
    const { title } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {/* Exibe o título recebido como parâmetro. */}
            <Text>{title}</Text>
        </View>
    );
}