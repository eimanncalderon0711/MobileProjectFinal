import React from "react";
import { TouchableOpacity, View, Text, ImageBackground, Image} from "react-native";
const bgimg = require("../assets/bgimg1.png");
const mylogo = require("../assets/SYNEMA LOGO.png");

function LandingPage({ navigation }) {
  return (
    <ImageBackground source={bgimg} className="flex-1 object-contain bg-no-repeat bg-scroll">
      <View className="flex-1 justify-center items-center gap-[450px]">
        <View>
          <Image source={mylogo} style={{width:250, height:250, marginBottom:-180}}></Image>
        </View>
        <TouchableOpacity
          className="bg-[#800000] py-3 px-32 rounded-lg"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default LandingPage;
