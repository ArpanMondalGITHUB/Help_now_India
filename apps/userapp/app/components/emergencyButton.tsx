import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons'; // or your preferred icon library

const EmergencyButton = ({ onPress,loading }:{onPress: () => void;loading:boolean;}) => (
  <TouchableOpacity
    className="h-32 w-32 rounded-md bg-orange-600 active:bg-orange-600 shadow-lg items-center justify-center"
    onPress={onPress}
    disabled={loading}
    activeOpacity={0.8}
  >
    {loading ? (
      <View className="items-center">
        <ActivityIndicator size="large" color="white" className="mb-2" />
        <Text className="text-white text-xs font-medium">Sending...</Text>
      </View>
    ) : (
      <View className="items-center">
        <Feather name="alert-circle" size={48} color="white" style={{ marginBottom: 4 }} />
        <Text className="text-white text-sm font-bold">HELP ME</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default EmergencyButton;