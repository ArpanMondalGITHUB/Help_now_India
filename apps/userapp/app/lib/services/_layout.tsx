import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="api" options={{headerShown: false}}/>
        <Stack.Screen name="auth" options={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout