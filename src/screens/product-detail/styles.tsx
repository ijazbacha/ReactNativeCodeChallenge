import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import colors from "../../services/config/colors";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.WHITE,
    },
    imageWrapper:{
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(40),
        backgroundColor:colors.LIGHT_GRAY,
    },
    imgStyle:{
        width:"100%",
        height:"100%",
    },
    dateWrapper:{
        flexDirection:"row",
        // alignItems: "center",
        // paddingTop:heightPercentageToDP(1),
        gap:widthPercentageToDP(2),
    },
    modalWrapper:{ 
        backgroundColor: colors.WHITE, 
        padding: heightPercentageToDP(4), 
        borderRadius: widthPercentageToDP(3) 
    },
    modalButton:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: heightPercentageToDP(1.5),
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        borderRadius: widthPercentageToDP(2),
        // marginBottom: hp(2),
        gap: widthPercentageToDP(2)
    },
});

export default styles;