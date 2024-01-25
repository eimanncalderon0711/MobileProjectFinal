import React, { useState } from 'react'
import { TouchableOpacity, View, Text, secureTextEntry, ImageBackground } from 'react-native'
import Buttons from '../components/Buttons'
import InputFields from '../components/InputFields'
const bgimg = require("./assets/bgimg.png");

function Register({navigation}) {

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrText] = useState("Errors")
  const [isError, setisError] = useState(false);

  const handleSubmit = () => {
      userName === "" ? (setErrText("Please Input A Username"), setisError(true)): (setErrText(""), setisError(false), console.log(userName), navigation.navigate("Login"))
      email === "" ? (setErrText("Please Input A email"), setisError(true)): (setErrText(""), setisError(false), console.log(email), navigation.navigate("Login"));
}
    
  return (
    <View className="justify-center items-center pb-6 flex-1 bg-blue-600">

        <View className="mb-8">
            <Text className="text-2xl font-extrabold">Logo</Text>
        </View>
        <View className="mb-3">
            <Text className="text-2xl font-extrabold pb-2">Create Account</Text>
        </View>

        <View className="gap-y-5 w-[80%]">
            <View>
                <InputFields title="Username" label="Username" onchange={(e) => setUsername(e)} />
            </View>
            <View>
                <InputFields title="Email" label="Email" onchange={(e) => setEmail(e)}/>
            </View>
            <View>
                <InputFields hidden={true} title="Password" label="Password" onchange={(e) => setPassword(e)}/>    
            </View>
            <View>
                <InputFields hidden={true} title="Confirm Password" label="Confirm Password" onchange={(e) => setConfirmPassword(e)}/>    
            </View>
        </View>

        <View className="w-[80%] mt-4">
            { isError && <Text className="text-center text-md pb-3 text-red-600 font-medium">{errorText}</Text>}
            {/* // <Text className="text-center text-md pb-3 text-red-600 font-medium">Error</Text> */}
            <Buttons style="w-[100%] bg-red-700 text-center text-white py-2 text-xl rounded-lg" title="Create" clicker={handleSubmit}/>
        </View>
        <ImageBackground source={bgimg} style={{flex: 1}}>
        </ImageBackground>
    </View>
  )
}

export default Register