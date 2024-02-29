import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import colors from '../../services/config/colors';
import styles from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fonts from '../../services/config/fonts';

type appButtonProps = {
    title: string;
    onPress(): void;
    isLoading?: boolean;
    widthInpercent?: string;
    height?: number;
    bgColor?: string;
    textColor?: string;
    fontSize?: number;
    fontFamily?: string;
    isDisable?: boolean;
}

const AppButton = ({ 
    title,
    onPress,
    isLoading,
    widthInpercent,
    height,
    bgColor,
    textColor,
    fontSize,
    fontFamily,
    isDisable,
 }: appButtonProps) => {

    const getWidth = (): any => {
        if (widthInpercent) {
            return widthInpercent
        } else {
            return "50%"
        }
    }

    const getHeight = (): number => {
        if (height) {
            return hp(height)
        } else {
            return hp(7)
        }
    }

    const getBgColor = (): string => {
        if(isDisable){
            return colors.SECONDARY
        }
        if (bgColor) {
            return bgColor
        }
        return colors.PRIMARY
    }
    return (
        <TouchableOpacity onPress={onPress} disabled={isDisable} style={[styles.btnWrapper, { width: getWidth(), height: getHeight(), backgroundColor: getBgColor() }]}>
            {
                isLoading ?
                    <ActivityIndicator size={"large"} color={colors.WHITE} />
                    :
                    <Text style={{
                        color: textColor ? textColor : colors.WHITE,
                        fontFamily: fontFamily ? fontFamily : fonts.REGULAR,
                        fontSize: fontSize ? wp(fontSize) : wp(4)
                    }}>{title}</Text>
            }

        </TouchableOpacity>
    )
}

export default AppButton