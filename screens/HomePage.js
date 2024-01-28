import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Cards from "../components/Cards";

const image = require("../assets/SMDT.png");
const image2 = require("../assets/centrio.png");
const image3 = require("../assets/smuptown.png");

function HomePage({ navigation }) {
  return (
    <ScrollView>
      <View className="container flex justify-center items-center bg-[#800000] p-10 gap-y-1 rounded-b-[50px]">
        <View className="rounded-full border-2 border-white w-[120px] h-[120px]">
          <Text className="text-center self-center m-auto font-bold text-white">
            Image
          </Text>
        </View>
        <View className="gap-y-5 justify-center items-center">
          <Text className="text-white text-xl font-semibold">
            John Carl Surbano
          </Text>
          <TouchableOpacity className="bg-white rounded-full">
            <Text
              className="py-3 px-6 font-semibold"
              onPress={() => navigation.navigate("Personal")}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className=" pt-12 justify-center items-center pb-3">
        <Text className="text-2xl font-semibold">Available Cinema</Text>
        <View className="mt-3 w-[80%]">
          <Text className="text-left pl-2 text-lg mt-3">SM CDO Downtown</Text>
          <Cards image={image} press={navigation.navigate("CinemaPage")} />
          <Text className="text-left pl-2 text-lg mt-3">
            Centrio Ayala Mall
          </Text>
          <Cards image={image2} press={navigation.navigate("CinemaPage")} />
          <Text className="text-left pl-2 text-lg mt-3">SM City</Text>
          <Cards image={image3} press={navigation.navigate("CinemaPage")} />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomePage;
