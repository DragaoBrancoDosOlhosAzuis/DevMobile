// Row.js
import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validação de props
import { View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

// Componente Row que recebe children como prop
export default function Row({ children }) {
    // View que representa uma linha, aplicando os estilos definidos em styles.row
    return <View style={styles.row}>{children}</View>;
}

// Define os tipos das props esperadas pelo componente Row
Row.propTypes = {
    // children deve ser um nó renderizável e é obrigatório
    children: PropTypes.node.isRequired,
};