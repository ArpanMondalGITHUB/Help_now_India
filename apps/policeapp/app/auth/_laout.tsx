import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _laout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="login_screen" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _laout;