import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../lib/context/police_auth_context'; 
import { router } from 'expo-router';

const profile_screen = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/auth/login_screen');
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome {user?.email}</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: '#e74c3c',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default profile_screen;
