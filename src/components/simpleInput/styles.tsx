import { StyleSheet } from "react-native";
import colors from "../../services/config/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    inputWrapper:{},
    input:{
        backgroundColor:colors.WHITE,
        color:colors.BLACK,
        borderRadius: wp(2),
        paddingLeft:wp(5)
    },
})

export default styles;