// Box.js
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

// Componente Box que recebe children como prop
export default function Box({ children }) {
    return (
        // View que representa uma caixa, aplicando os estilos definidos em styles.box
        <View style={styles.box}>
            {/* Texto dentro da caixa, aplicando os estilos definidos em styles.boxText e
            exibindo o children recebido */}
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}