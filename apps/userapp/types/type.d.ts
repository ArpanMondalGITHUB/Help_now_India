import {TextInputProps, TouchableOpacityProps} from "react-native";


declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
    textClassName?: string;
}