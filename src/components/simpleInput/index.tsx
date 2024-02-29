import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

type simpleInputProps = {
    placeholder: string;
    value: string;
    setValue(value: string): void;
    customStyle?: {};
    widthInpercent?: string;
    height?: number;
    placeholderTextColor?: string;
    multiline?:boolean;
    keyboardType?:any
}

const SimpleInput = ({ placeholder, value, setValue, customStyle, widthInpercent, height, placeholderTextColor, multiline, keyboardType, ...props }: simpleInputProps) => {
    const getWidth = (): any => {
        if (widthInpercent) {
            return widthInpercent
        } else {
            return "100%"
        }
    }

    const getHeight = (): number => {
        if (height) {
            return hp(height)
        } else {
            return hp(7)
        }
    }
    return (
        <>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={(val) => setValue(val)}
                value={value}
                multiline
                keyboardType={keyboardType}
                style={[styles.input, customStyle && customStyle, { width: getWidth(), height: getHeight() }]}
                {...props}
            />
        </>
    )
}

export default SimpleInput