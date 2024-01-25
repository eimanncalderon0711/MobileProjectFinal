import React from 'react'
import { TextInput, View, Text } from 'react-native'

function InputFields({title, label, hidden, onchange}) {
  return (
    <View>
        <Text className="text-white text-[18px] py-2">{label}</Text>
        <View className="bg-white py-2 rounded-lg px-3">
            <TextInput secureTextEntry={hidden} onChangeText={onchange} className="text-black text-md" placeholder={title}/>
        </View>
    </View>
  
  )
}

export default InputFields