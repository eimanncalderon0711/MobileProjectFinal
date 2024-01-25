import React from "react";
import { TouchableOpacity, View, Text, ImageBackground } from "react-native";
const bgimg = require("../assets/backg.jpg");

function LandingPage({ navigation }) {
  return (
    <ImageBackground source={bgimg} className="flex-1">
      <View className="flex-1 justify-center items-center gap-[450px]">
        <View>
          <Text className="text-2xl">Logo</Text>
        </View>
        <TouchableOpacity
          className="bg-red-800 py-3 px-32 rounded-lg"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default LandingPage;
