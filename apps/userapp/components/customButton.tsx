import { View, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { ButtonProps } from '@/types/type'
const CustomButton = ({onPress,
  title,
  className,
  textClassName,
  IconLeft,
  ...props}: ButtonProps) =>  (
    <TouchableOpacity  onPress={onPress} activeOpacity={0.8} className={`flex-row items-center justify-center bg-white rounded-lg py-3 px-4 shadow-md w-full max-w-xs mx-auto" ${className}`}
    {...props} >
      {IconLeft && (
      <View className="mr-3">
        <IconLeft />
      </View>
    )}
      <Text className={`text-gray-800 font-bold text-base ${textClassName}`}>{title}</Text>
    </TouchableOpacity>
  )

export default CustomButton