import React from 'react'
import { TouchableOpacity, View, Text, secureTextEntry } from 'react-native'
import Buttons from '../components/Buttons'
import InputFields from '../components/InputFields'

function Login() {
    
  return (
    <View className="justify-evenly items-center flex-1 gap-8 bg-blue-600">

        <View>
            <Text className="text-2xl font-extrabold pb-2">Logo</Text>
        </View>

        <View className="gap-y-8">
            <View>
                <InputFields title="Email" label="Email"/>
            </View>
            <View>
                <InputFields hidden={true} title="Password" label="Password"/>    
            </View>
            <TouchableOpacity className="self-end">
                <Buttons style="text-[15px] text-white" title="Forgot Password"/>
            </TouchableOpacity>
        </View>

        <View className="h-[10%] justify-between">
            <Buttons style="text-white text-center" title="Don't Have an Account Yet?" clicker={() => console.log("Adto Sa register")}/>
            <Buttons style="bg-red-700 text-center text-white px-32 py-3 text-xl rounded-lg" title="Login" clicker={() => console.log("Adto sa login")}/>
        </View>
       
        
    </View>
  )
}

export default Login