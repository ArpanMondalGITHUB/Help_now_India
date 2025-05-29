import { policeicons } from '@/constants';
import { router } from 'expo-router';
import React, { useState } from 'react';
import Login from '../lib/services/police_auth';
import { useAuth } from '../lib/context/police_auth_context';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

const login_screen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const { login } = useAuth(); 

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Error', 'Please enter both email and password.');
        return;
      }

      setLoading(true);
      const userData = await Login(email, password); 
      await login(userData); 
      router.replace('/(root)/(tabs)/home_screen');
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert('Error', 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <KeyboardAvoidingView 
        className="flex-1" 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView 
            className="flex-1"
            contentContainerStyle={{ 
              flexGrow: 1,
              paddingBottom: 50 
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            bounces={false}
          >
            <View className="flex-1 px-6 justify-center">
              
              {/* Logo and Title Section */}
              <View className="items-center mb-8 mt-10">
                <Image
                  source={policeicons.policelogo}
                  className="w-32 h-32 mb-4"
                  resizeMode="contain"
                />
                <Text className="text-black text-3xl font-bold text-center">
                   Login
                </Text>
              </View>

              {/* Form Section */}
              <View className="flex-1 justify-center">
                
                {/* Name Input */}
                <View className="mb-4">
                  <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">
                    Name
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-xl px-4 py-4 text-gray-700 text-base bg-gray-50 focus:border-orange-400 focus:bg-white"
                    placeholder="Enter your name"
                    placeholderTextColor="#9ca3af"
                    value={name}
                    onChangeText={setName}
                    keyboardType="default"
                    autoCapitalize="words"
                    autoCorrect={false}
                    returnKeyType="next"
                  />
                </View>

                {/* Email Input */}
                <View className="mb-4">
                  <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">
                    Email
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-xl px-4 py-4 text-gray-700 text-base bg-gray-50 focus:border-orange-400 focus:bg-white"
                    placeholder="Enter your email"
                    placeholderTextColor="#9ca3af"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                  />
                </View>

                {/* Password Input */}
                <View className="mb-8">
                  <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">
                    Password
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-xl px-4 py-4 text-gray-700 text-base bg-gray-50 focus:border-orange-400 focus:bg-white"
                    placeholder="Enter your password"
                    placeholderTextColor="#9ca3af"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                    returnKeyType="done"
                    onSubmitEditing={handleLogin}
                  />
                </View>

                {/* Login Button */}
                <TouchableOpacity
                  onPress={handleLogin}
                  className="bg-orange-400 rounded-xl py-4 mb-6 shadow-lg active:bg-orange-500"
                  activeOpacity={0.8}
                  disabled={loading}
                >
                  <Text className="text-white text-lg font-semibold text-center">
                    {loading ? 'Logging In...' : 'Log In'}
                  </Text>
                </TouchableOpacity>

                {/* Forgot Password */}
                <TouchableOpacity className="mb-8">
                  <Text className="text-orange-400 text-center text-base font-medium">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

              </View>

              {/* Bottom indicator line */}
              <View className="items-center pb-6">
                <View className="w-16 h-1 bg-orange-300 rounded-full" />
              </View>
              
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login_screen;