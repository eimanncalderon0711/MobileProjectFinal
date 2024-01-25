import React from 'react'
import { TextInput, View, Text } from 'react-native'

function InputFields({title, label, hidden}) {
  return (
    <View>
        <Text className="text-white text-[18px] py-2">{label}</Text>
        <View className="bg-white py-3 w-[360px] rounded-lg px-2">
            <TextInput secureTextEntry={hidden} className="text-black text-md" placeholder={title}/>
        </View>
    </View>
  
  )
}

export default InputFields