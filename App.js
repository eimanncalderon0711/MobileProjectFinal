import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';

export default function App() {
  return (
    <View className="flex-1 bg-gray-800">
      <Login/>
    </View>
  );
}


