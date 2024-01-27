import React from "react";
import { View, Text, Image } from "react-native";

function Cards({image}) {
  return (
    <View>
        <View className="shadow-black rounded-xl">
            <Image className="object-cover rounded-xl h-32 w-[100%]" source={image}/>
        </View>
    </View>
  );
}

export default Cards;