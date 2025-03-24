// App.js
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

// Componente principal App
export default function App() {
    return (
        // View principal que serve como container, aplicando os estilos definidos em styles.container
        <View style={styles.container}>
            {/* View que representa uma caixa, aplicando os estilos definidos em styles.box */}
            <View style={styles.box}>
                {/* Texto dentro da caixa, aplicando os estilos definidos em styles.boxText */}
                <Text style={styles.boxText}>!</Text>
            </View>
            
            {/* View que representa uma caixa, aplicando os estilos definidos em styles.box */}
            <View style={styles.box}>
                {/* Texto dentro da caixa, aplicando os estilos definidos em styles.boxText */}
                <Text style={styles.boxText}>?</Text>
            </View>
            
            {/* View que representa uma caixa, aplicando os estilos definidos em styles.box */}
            <View style={styles.box}>
                {/* Texto dentro da caixa, aplicando os estilos definidos em styles.boxText */}
                <Text style={styles.boxText}>?</Text>
            </View>
        </View>
    );
}