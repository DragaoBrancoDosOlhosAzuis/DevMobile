// App.js
import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js
import Row from "./Row"; // Importa o componente Row
import Column from "./Column"; // Importa o componente Column
import Box from "./Box"; // Importa o componente Box

// Componente principal App
export default function App() {
    return (
        // View principal que serve como container, aplicando os estilos definidos em styles.container
        <View style={styles.container}>
            {/* Componente StatusBar para controlar a visibilidade da barra de status */}
            <StatusBar hidden={false} />
            
            {/* Componente Row para organizar os elementos em linha */}
            <Row>
                {/* Componente Column para organizar os elementos em coluna */}
                <Column>
                    {/* Componente Box com o texto "#1" */}
                    <Box>#1</Box>
                    {/* Componente Box com o texto "#2" */}
                    <Box>#2</Box>
                </Column>
                
                {/* Componente Column para organizar os elementos em coluna */}
                <Column>
                    {/* Componente Box com o texto "#3" */}
                    <Box>#3</Box>
                    {/* Componente Box com o texto "#4" */}
                    <Box>#4</Box>
                </Column>
            </Row>
            
            {/* Componente Row para organizar os elementos em linha */}
            <Row>
                {/* Componente Column para organizar os elementos em coluna */}
                <Column>
                    {/* Componente Box com o texto "#5" */}
                    <Box>#5</Box>
                    {/* Componente Box com o texto "#6" */}
                    <Box>#6</Box>
                </Column>
                
                {/* Componente Column para organizar os elementos em coluna */}
                <Column>
                    {/* Componente Box com o texto "#7" */}
                    <Box>#7</Box>
                    {/* Componente Box com o texto "#8" */}
                    <Box>#8</Box>
                </Column>
            </Row>
        </View>
    );
}