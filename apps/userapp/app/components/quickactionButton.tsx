import {TouchableOpacity,Text, View } from "react-native";
import React from 'react'
import { ButtonProps } from '@/types/type';

const QuickActionButton = ({title,IconLeft,...props}: ButtonProps) => (
    <TouchableOpacity
      className="flex-1 h-20 border border-purple-200 rounded-lg mx-1 items-center justify-center bg-white active:bg-gray-50"
      // onPress={onPress}
      activeOpacity={0.7}
      {...props}
    >
        {IconLeft && (
            <IconLeft />
        )}

      <Text className="text-gray-800 text-xs text-center font-medium">{title}</Text>
    </TouchableOpacity>
)
export default QuickActionButton;