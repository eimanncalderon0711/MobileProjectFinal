import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentInfo from "./screens/PaymentInfo";
import PaymentConfirmation from "./screens/PaymentConfirmation";
import HomePage from "./screens/HomePage";
import Personal from "./screens/Personal";
import CinemaPage from "./screens/CinemaPage";
import MoviePage from "./screens/MoviePage";
import BookTicketPage from "./screens/BookTicketPage";
import PaymentSuccessful from "./screens/PaymentSucessful";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 bg-gray-800">
        <Stack.Navigator>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Personal" component={Personal} />
          <Stack.Screen name="MoviePage" component={MoviePage} />
          <Stack.Screen name="CinemaPage" component={CinemaPage} />
          <Stack.Screen name="BookTicketPage" component={BookTicketPage} />
          <Stack.Screen name="PaymentInformation" component={PaymentInfo} />
          <Stack.Screen
            name="PaymentConfirmation"
            component={PaymentConfirmation}
          />
          <Stack.Screen
            name="PaymentSuccessful"
            component={PaymentSuccessful}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
