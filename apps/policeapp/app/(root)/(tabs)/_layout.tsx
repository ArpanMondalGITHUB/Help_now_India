import { View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { policeicons } from '@/constants'
import { BlurView } from 'expo-blur'
const _layout = () => {
  const TabIcon = ({source,focused}:{source:ImageSourcePropType,focused:boolean}) =>  (
    <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-primary" : ""}`}>
      <View className={`rounded-full w-10 h-10 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
        <Image source={source} tintColor="white" resizeMode='contain' className='w-7 h-7'/>
      </View>
    </View>
  )
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:'white',
       headerShown:false
      ,tabBarInactiveTintColor:'white',
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:"trsnparent",
        borderRadius:50,
        paddingBottom:20,
        overflow:"hidden",
        marginHorizontal:20,
        marginBottom:20,
        height:78,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        position:"absolute"
      },
      tabBarBackground: () => (
          <BlurView
            intensity={0}
            tint="dark" // or "dark"
            style={{
              flex: 1,
              borderRadius: 50,
            }}
          />
        )
    }}>
      <Tabs.Screen name='history_screen' options={{title:'history_screen', headerShown:false ,
         tabBarIcon: ({focused}) => <TabIcon focused={focused} source={policeicons.policehome}/>}}/>
      <Tabs.Screen name='map_screen' options={{title:'map_screen', headerShown:false ,
         tabBarIcon: ({focused}) => <TabIcon focused={focused} source={policeicons.policemap}/>}}/>
      <Tabs.Screen name='history_screen' options={{title:'history_screen', headerShown:false ,
         tabBarIcon: ({focused}) => <TabIcon focused={focused} source={policeicons.policelist}/>}}/>
      <Tabs.Screen name='profile_screen' options={{title:'profile_screen', headerShown:false ,
         tabBarIcon: ({focused}) => <TabIcon focused={focused} source={policeicons.policeprofile}/>}}/>
    </Tabs>
  )

}

export default _layout;