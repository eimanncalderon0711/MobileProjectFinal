import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function Buttons({title, style , clicker}) {
  return (
    <View>
        <TouchableOpacity>
            <Text className={style} onPress={clicker}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Buttons