import { View, Text, ImageBackground, Pressable, SafeAreaView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { images } from '@/constants';
import { router } from 'expo-router';
import { sendOTP, verifyOTP } from '../lib/services/auth';
import { useAuth } from '../lib/context/auth_context';

const otpScreen = () => {

  const [otp, setOtp] = useState(Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const { phoneNumber, login } = useAuth();
  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft === 0) return;
    
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    
    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Format time as 00:00
  const formatTime = (seconds : any) => {
    return `00:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  // Handle OTP input change
  const handleOtpChange = (value: string, index: number) => {
  const newOtp = [...otp];
  newOtp[index] = value.slice(-1);
  setOtp(newOtp);

  if (value && index < 5) {
    inputRefs.current[index + 1]
  }
  };

  // Handle key press for backspace navigation
  const handleKeyPress = (e : any, index : number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1];
    }
  };

const handleVerifyOTP = async () => {
  const otpCode = otp.join('');
  if (otpCode.length !== 6) {
    Alert.alert('Error', 'Please enter a valid 6-digit OTP');
    return;
  }

  try {
    setLoading(true);
    const response = await verifyOTP(phoneNumber, otpCode);
    await login(response.user);
    router.push('../(root)/(tabs)/home');
  } catch (error) {
    Alert.alert('Error', 'Failed to verify OTP');
  } finally {
    setLoading(false);
  }
};

  const handleResendOTP = async () => {
    try {
      setLoading(true);
      await sendOTP(phoneNumber);
      setResendDisabled(true);
      setTimeLeft(30);
      Alert.alert('Success', 'OTP resent successfully');
    } catch (error) {
      Alert.alert('Error','Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ImageBackground source={images.background} className="flex-1" resizeMode="cover">

      <SafeAreaView className="flex-1">
        <StatusBar hidden={true} />

      {/* Header */}
      <View className="flex-row items-center justify-center p-4">
        <TouchableOpacity 
          onPress={() => router.canGoBack} 
          className="mr-4"         
        >
          {/* <FontAwesome name="chevron-left" size={16} color="#333" /> */}
        </TouchableOpacity>
        <Text className="text-xl font-medium text-gray-800">OTP Verification</Text>
      </View>

      {/* Content */}
      <View className="px-6 pt-6">
        <Text className="text-gray-600 mb-2">
          Enter the 4-digit code sent to
        </Text>
        <Text className="text-gray-800 font-medium mb-8">
          +91 9860401273
        </Text>

        {/* OTP Input */}
        <View className="flex-row justify-between mb-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}ref={(ref) => {inputRefs.current[index] = ref;}}
              className="w-16 h-16 border border-gray-300 rounded-lg text-center text-xl bg-white"
              maxLength={1}
              keyboardType="number-pad"
              value={otp[index]}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Verify Otp Button */}
        <TouchableOpacity 
          onPress={handleVerifyOTP}
          className="bg-orange-500 rounded-lg py-4 items-center mb-6"
        >
          <Text className="text-white font-medium text-center">Verify</Text>
        </TouchableOpacity>

        {/* Resend OTP */}
        <View className="items-center">
          <Pressable onPress={handleResendOTP}>
            <Text className="text-gray-600 text-center">
              Didn't receive OTP? 
              <Text className={`font-medium ${timeLeft === 0 ? 'text-orange-500' : 'text-gray-600'}`}>
                {' '}Resend in {formatTime(timeLeft)}
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
            
    </ImageBackground>
  );
}

export default otpScreen;