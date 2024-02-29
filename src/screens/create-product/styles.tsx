import { StyleSheet } from "react-native";
import colors from "../../services/config/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.LIGHT_GRAY,
        paddingVertical:heightPercentageToDP(2),
        padding:widthPercentageToDP(4)
    },
    inputWrapper:{
        marginBottom:heightPercentageToDP(3),
    },
})

export default styles;