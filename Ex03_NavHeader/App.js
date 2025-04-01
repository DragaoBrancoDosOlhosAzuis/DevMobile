import React from 'react';
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Details from "./Details";

// Cria um Stack Navigator usando createNativeStackNavigator.
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // NavigationContainer é necessário para envolver o navegador.
        <NavigationContainer>
            <Stack.Navigator>
                {/* Define a tela Home e associa o componente Home. */}
                <Stack.Screen name="Home" component={Home} />
                
                {/* Define a tela Details e associa o componente Details. */}
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={({ route }) => ({
                        headerRight: () => (
                            <Button
                                title="Buy"
                                onPress={() => {}}
                                // Desabilita o botão se o estoque for zero.
                                disabled={route.params?.stock === 0}
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}