import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="api" options={{headerShown: false}}/>
        <Stack.Screen name="police_auth" options={{headerShown: false}}/>
        <Stack.Screen name="socket_api" options={{headerShown: false}}/>
        <Stack.Screen name="send_location_to_backend" options={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout