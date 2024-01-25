import React from 'react'
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native'
const bgimg = require("./assets/bgimg.png");

function LandingPage({navigation}) {
  return (
    <View className="flex-1 justify-center items-center gap-[450px]">
        <View>
            <Text className="text-2xl">Logo</Text>
        </View>
        <TouchableOpacity className="bg-red-800 py-3 px-32 rounded-lg" onPress={() => navigation.navigate("Login")}>
            <Text className="text-white text-lg">Get Started</Text>
        </TouchableOpacity>
        <ImageBackground source={bgimg} style={{flex: 1}}>
        </ImageBackground>
    </View>
  )
}

export default LandingPage