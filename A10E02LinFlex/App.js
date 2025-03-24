// App.js
import React from "react";
import { View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js
import Box from "./Box"; // Importa o componente Box

// Componente principal App
export default function App() {
    return (
        // View principal que serve como container, aplicando os estilos definidos em styles.container
        <View style={styles.container}>
            {/* Utiliza o componente Box e passa o texto "$1" como children */}
            <Box>$1</Box>
            {/* Utiliza o componente Box e passa o texto "$2" como children */}
            <Box>$2</Box>
        </View>
    );
}