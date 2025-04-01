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
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}