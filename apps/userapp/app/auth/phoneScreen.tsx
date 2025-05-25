import { images } from "@/constants";
import React, { useState } from "react";
import { Alert, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  {sendOTP}  from '../lib/services/auth'
import { router } from "expo-router";
import { useAuth } from "../lib/context/auth_context";

const phoneScreen = ({}) => {

  const [phonenumber, setPhonenumber] = useState("")
  const [loading, setLoading] = useState(false)
  const {storePhoneNumber} = useAuth();

const handleSendOtp = async () => {
  if (!phonenumber) {
    Alert.alert("Error", "Please Enter Your Phone Number");
    return;
  }

  try {
    setLoading(true);
    await sendOTP(phonenumber);
    storePhoneNumber(phonenumber);
    router.push('./otpScreen');
  } catch (error) {
    console.error("Full error:", error);
    Alert.alert('Error', 'Failed to send OTP from phone screen');
  } finally {
    setLoading(false);
  }
};


  return (
    <ImageBackground
      source={images.background}
      className="flex-1"
      resizeMode="cover">

     <SafeAreaView className="flex-1">

        <StatusBar hidden={true} />

        {/* Content */}
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
                value={phonenumber}
                onChangeText={setPhonenumber}
              />
          </View>

          {/* Send Otp Button */}
          <TouchableOpacity 
              className="bg-white rounded-lg py-3 px-4"
              onPress={handleSendOtp}
              disabled={loading}
            >
              <Text className="text-gray-800 text-center font-medium">Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    </ImageBackground>
  );
};

export default phoneScreen;

