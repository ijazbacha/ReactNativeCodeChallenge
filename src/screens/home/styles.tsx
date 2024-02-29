import { StyleSheet } from "react-native";
import colors from "../../services/config/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.WHITE,
        paddingVertical:heightPercentageToDP(2),
        padding:widthPercentageToDP(4)
    },
    cardWrapper:{
        width:widthPercentageToDP(44),
        marginVertical:heightPercentageToDP(1),
        backgroundColor:colors.WHITE,
        borderColor:colors.LIGHT_GOLDEN,
        borderWidth:0.5,
        borderRadius: widthPercentageToDP(2),
    },
    imgWrapper:{
        width:widthPercentageToDP(44),
        height:heightPercentageToDP(20),
        padding:3,
        backgroundColor:colors.LIGHT_GOLDEN,
        borderTopRightRadius:widthPercentageToDP(2),
        borderTopLeftRadius:widthPercentageToDP(2),
    },
    contentWrapper:{},
    textWrapper:{
        padding:7
    },
    buttonsWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:5,
        paddingBottom:5,
        paddingHorizontal:5
    },
    btnStyle:{
        justifyContent:'center',
        width:widthPercentageToDP(10),
        height:heightPercentageToDP(5),
        backgroundColor: colors.PRIMARY,
        borderRadius: widthPercentageToDP(2),
    },
})
// "my-2 bg-white rounded-md shadow-lg w-40 border border-gray-300
export default styles;