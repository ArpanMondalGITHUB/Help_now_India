import { policeicons } from '@/constants';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

const login_screen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.push('../(root)/(tabs)/history_screen');
    console.log('Login pressed', { email, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <View className="flex-1 px-6 justify-center">
          <View className=" relative w-full h-[250px] justify-center items-center">
            <Image
              source={policeicons.policelogo}
              className="z-0 w-48 h-48"
              resizeMode="cover"
            />
          {/* Login Title */}
          <Text className="text-black text-3xl font-bold text-center mb-10">
            Login
          </Text>
        </View>


        {/* Email Input */}
        <View className="mb-4">
          <TextInput
            className="border-2 border-gray-400 rounded-xl px-4 py-4 text-gray-600 text-lg"
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* Password Input */}
        <View className="mb-8">
          <TextInput
            className="border-2 border-gray-400 rounded-xl px-4 py-4 text-gray-600 text-lg"
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-orange-400 rounded-xl py-4 mb-8"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold text-center">
            Log In
          </Text>
        </TouchableOpacity>

        {/* Bottom indicator line */}
        <View className="items-center">
          <View className="w-16 h-1 bg-orange-300 rounded-full" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login_screen;