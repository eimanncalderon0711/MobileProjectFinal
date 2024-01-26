import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentInfo from "./screens/PaymentInfo";
import PaymentConfirmation from "./screens/PaymentConfirmation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 bg-gray-800">
        <Stack.Navigator>
          <Stack.Screen name="Payment Confirmation" component={PaymentConfirmation} />
          <Stack.Screen name="Payment Information" component={PaymentInfo} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
