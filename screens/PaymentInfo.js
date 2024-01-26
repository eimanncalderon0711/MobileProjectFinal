import React from 'react'
import { Text, View, } from 'react-native'
import Buttons from '../components/Buttons'
import InputFields from '../components/InputFields'

function PaymentInfo() {
  return (
    <View className="flex-1 justify-center gap-y-20">
        <View className="gap-y-10 w-[90%] self-center">
            <Text className="text-[#1B2C49] font-semibold text-lg">Payment Method</Text>
            <Text className="self-center">Gcash Logo</Text>
            <InputFields title="Ex. 097512332145" label="Enter Phone Number" styles="text-black text-[15px] py-2" styles2="border-2"/>
        </View>
        <View className="w-[90%] self-center">
            <Buttons title="Next" style="w-[100%] bg-red-600 text-center py-2 text-lg rounded-md text-white"/>
        </View>
    </View>
  )
}

export default PaymentInfo