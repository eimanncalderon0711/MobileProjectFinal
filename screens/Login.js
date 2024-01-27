import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  secureTextEntry,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import Buttons from "../components/Buttons";
import InputFields from "../components/InputFields";
const bgimg = require("../assets/bgimg1.png");
const mylogo = require("../assets/SYNEMA LOGO.png");

function Login({ navigation }) {
  return (
    <ImageBackground
      source={bgimg}
      className="flex-1 object-contain bg-no-repeat bg-scroll"
    >
      <View className="justify-evenly items-center flex-1 gap-8">
        <View>
          <Image
            source={mylogo}
            style={{
              width: 250,
              height: 250,
              marginBottom: -200,
              marginTop: -80,
            }}
          ></Image>
        </View>
        <View className="gap-y-8 w-[80%]">
          <View>
            <InputFields
              title="Email"
              label="Email"
              styles="text-white text-[18px] py-2"
            />
          </View>
          <View>
            <InputFields
              hidden={true}
              title="Password"
              label="Password"
              styles="text-white text-[18px] py-2"
            />
          </View>
          <TouchableOpacity className="self-end">
            <Buttons style="text-[15px] text-white" title="Forgot Password" />
          </TouchableOpacity>
        </View>

        <View className="w-[80%] h-[10%] justify-between">
          <Buttons
            style="text-white text-center"
            title="Don't Have an Account Yet? Sign up"
            clicker={() => navigation.navigate("Register")}
          />
          <Buttons
            style="bg-red-700 text-center text-white py-2 text-xl rounded-lg"
            title="Login"
            clicker={() => navigation.navigate("HomePage")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
