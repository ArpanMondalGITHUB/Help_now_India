import { images } from "@/constants";
import React from "react";
import { ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const signup = () => {
  return (
    <ImageBackground
      source={images.background}
      className="flex-1"
      resizeMode="cover">

     <SafeAreaView className="flex-1">

        <StatusBar hidden={true} />

        <View className=" w-full mt-24 px-4">
          <Text className="text-black font-bold text-lg mb-4">Enter mobile number</Text>

          <View className="flex-row mb-4">
            <View className=" bg-white rounded-lg mr-2 px-3 py-4 w-16 justify-center items-center">
              <Text className="text-black font-bold text-lg ">+91</Text>
            </View>

            <TextInput
                className="bg-white rounded-lg flex-1 px-4 py-3 text-gray-800"
                placeholder="Phone number"
                keyboardType="phone-pad"
              
              />
          </View>

          <TouchableOpacity 
              className="bg-white rounded-lg py-3 px-4"
              onPress={() => console.log('Continue pressed')}
            >
              <Text className="text-gray-800 text-center font-medium">Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    </ImageBackground>
  );
};

export default signup;
