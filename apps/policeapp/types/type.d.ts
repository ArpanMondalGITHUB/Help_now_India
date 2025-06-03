import {TextInputProps, TouchableOpacityProps} from "react-native";


declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
    textClassName?: string;
}

export type RootStackParamList = {
  home_screen: undefined;
  map_screen: { userLocation: UserLocation };
  // ...other screens
};