import { View, Text, ImageBackground, Pressable, SafeAreaView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { images } from '@/constants';
import { router } from 'expo-router';

const login = () => {
  
  const [otp, setOtp] = useState(['2', '2', '0', '7']);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef([]);

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
    if (value.length > 1) {
      // If pasting multiple digits, use only the first one
      value = value.charAt(0);
    }
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs.current[index + 1];
    }
  };

  // Handle key press for backspace navigation
  const handleKeyPress = (e : any, index : number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1];
    }
  };

  // Handle continue button press
  const handleContinue = () => {
    const otpValue = otp.join('');
    console.log('OTP Submitted:', otpValue);
    // Add navigation or verification logic here
  };

  // Handle resend OTP
  const handleResend = () => {
    if (timeLeft === 0) {
      console.log('Resending OTP...');
      setTimeLeft(30);
      // Add your resend logic here
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
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              // ref={(ref) => (inputRefs.current[index] = ref)}
              className="w-16 h-16 border border-gray-300 rounded-lg text-center text-xl bg-white"
              maxLength={1}
              keyboardType="number-pad"
              value={otp[index]}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          onPress={handleContinue}
          className="bg-orange-500 rounded-lg py-4 items-center mb-6"
        >
          <Text className="text-white font-medium text-center">Continue</Text>
        </TouchableOpacity>

        {/* Resend OTP */}
        <View className="items-center">
          <Pressable onPress={handleResend}>
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

export default login