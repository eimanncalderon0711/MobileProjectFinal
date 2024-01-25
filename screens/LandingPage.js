import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

function LandingPage() {
  return (
    <View className="flex-1 justify-center items-center gap-[450px]">
        <View>
            <Text className="text-2xl">Logo</Text>
        </View>
        <TouchableOpacity className="bg-red-800 py-3 px-32 rounded-lg">
            <Text className="text-white text-lg">Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LandingPage