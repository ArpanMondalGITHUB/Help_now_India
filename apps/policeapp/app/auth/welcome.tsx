import { policeimages } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

const welcome = () => {
  const Continue = () => {
    router.push('./login_screen')
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" hidden={true}/>
      
      {/* Background with city skyline */}
      <ImageBackground
        source={policeimages.polica_app_background}
        className="flex-1 justify-between"
        resizeMode="cover"
      >
        {/* Overlay for better text visibility */}
        <View className="absolute inset-0 bg-slate-800/70" />
        
        {/* Main Content */}
        <View className="flex-1 justify-center items-center px-8 z-10">
          {/* Police Badge */}
          <View className="bg-slate-600/80 rounded-full p-8 mb-8 border-4 border-slate-300">
            <View className="items-center">
              <Text className="text-slate-200 text-lg font-bold mb-2">POLICE</Text>
              <View className="w-8 h-8 bg-slate-200">
                {/* Star shape using text */}
                <Text className="text-slate-600 text-2xl text-center leading-8">★</Text>
              </View>
            </View>
          </View>
          
          {/* Welcome Text */}
          <Text className="text-slate-200 text-5xl font-bold text-center mb-2 tracking-wider">
            WELCOME
          </Text>
          <Text className="text-slate-200 text-5xl font-bold text-center mb-2 tracking-wider">
           TO
          </Text>
          <Text className="text-slate-200 text-5xl font-bold text-center tracking-wider">
            Police Force
          </Text>
        </View>
        
        {/* Bottom Button */}
        <View className="px-6 pb-12 z-10">
          <TouchableOpacity
            onPress={Continue}
            className="bg-white rounded-xl py-4 px-6 shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-gray-800 text-lg font-semibold text-center">
              Continue 
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default welcome;