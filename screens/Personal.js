import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Buttons from "../components/Buttons";
import InputFields from "../components/InputFields";

function Personal({ navigation }) {
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
        </View>
      </View>
      <View>
        <Text className="font-bold text-2xl py-6 px-6">
          Personal Information
        </Text>
      </View>
      <View className="px-6">
        <Text className="text-[15px]">Username</Text>
        <InputFields className="text-white border-2" />
      </View>
      <View className="px-6">
        <Text className="text-[15px] pt-5">Email</Text>
        <InputFields className="text-white " />
      </View>
      <View className="px-6">
        <Text className="text-[15px] pt-5">Password</Text>
        <InputFields className="text-whi    te " hidden={true} />
      </View>
      <View className="px-6">
        <Text className="text-[15px] pt-5">Phone Number</Text>
        <InputFields className="text-white " />
      </View>
      <View className="px-6">
        <Text className="text-[15px] pt-5">Address</Text>
        <InputFields className="text-white " />
      </View>
      <View className="py-12 px-12 flex-row flex-1 justify-around ">
        <Buttons
          style="bg-[#800000] text-center text-white py-3 px-8 text-[15px] rounded-[20px]"
          title="Edit"
        />
        <Buttons
          style="bg-black text-center text-white py-3 px-5 text-[15px] rounded-[20px]"
          title="Save Changes"
          clicker={() => navigation.navigate("HomePage")}
        />
      </View>
    </ScrollView>
  );
}

export default Personal;
