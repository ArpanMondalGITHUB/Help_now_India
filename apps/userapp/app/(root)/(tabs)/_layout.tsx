import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false,}}>
      <Tabs.Screen name='home' options={{title:"Home",headerShown:false,}}/>
      <Tabs.Screen name='history' options={{title:"history",headerShown:false,}}/>
      <Tabs.Screen name='map' options={{title:"map",headerShown:false,}}/>
      <Tabs.Screen name='profile' options={{title:"profile",headerShown:false,}}/>
    </Tabs>
  )
}

export default _layout