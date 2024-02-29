import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../services/config/colors';
import fonts from '../../services/config/fonts';

type appTextProps = {
    text:string | number;
    fontSize?:number;
    color?: string;
    fontFamily?: string;
    textTransform?: TextStyle["textTransform"];
    textAlign?:TextStyle["textAlign"];
}

const AppText = ({text, fontSize, color, fontFamily, textTransform, textAlign}:appTextProps) => {
  return (
      <Text style={{
        color: color ? color : colors.BLACK,
        fontSize: fontSize ? wp(fontSize) : wp(4),
        fontFamily: fontFamily ? fontFamily : fonts.REGULAR,
        textTransform: textTransform ? textTransform : "none",
        textAlign:textAlign ? textAlign : "auto"
      }}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  textStyle:{

  }
})

export default AppText