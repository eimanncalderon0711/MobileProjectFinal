import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  secureTextEntry,
  SafeAreaView,
  ImageBackground
} from "react-native";
import Buttons from "../components/Buttons";
import InputFields from "../components/InputFields";
const bgimg = require("./assets/bgimg.png");

function Login({navigation}) {
  return (
    <View className="justify-evenly items-center flex-1 gap-8 bg-blue-600">
      <View>
        <Text className="text-2xl font-extrabold pb-2">Logo</Text>
      </View>
      <View className="gap-y-8 w-[80%]">
        <View>
          <InputFields title="Email" label="Email" />
        </View>
        <View>
          <InputFields hidden={true} title="Password" label="Password" />
        </View>
        <TouchableOpacity className="self-end">
          <Buttons style="text-[15px] text-white" title="Forgot Password" />
        </TouchableOpacity>
      </View>

      <View className="w-[80%] h-[10%] justify-between">
        <Buttons
          style="text-white text-center"
          title="Don't Have an Account Yet?"
          clicker={() => navigation.navigate("Register")}
        />
        <Buttons
          style="bg-red-700 text-center text-white py-2 text-xl rounded-lg"
          title="Login"
          clicker={() => console.log("adadad")}
        />
      </View>
      <ImageBackground source={bgimg} style={{flex: 1}}>
      </ImageBackground>
    </View>
  );
}

export default Login;
