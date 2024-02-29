import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import colors from "../../services/config/colors";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.LIGHT_GOLDEN,
        paddingTop:heightPercentageToDP(2),
    },
    cardWrapper:{
        width:widthPercentageToDP(90),
        marginVertical:heightPercentageToDP(1),
        backgroundColor:colors.WHITE,
        borderColor:colors.LIGHT_GOLDEN,
        borderWidth:0.5,
        borderRadius: widthPercentageToDP(2),
        paddingHorizontal:widthPercentageToDP(2),
        paddingVertical:widthPercentageToDP(3),
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:widthPercentageToDP(4),
    },
    imgWrapper:{
        width:widthPercentageToDP(20),
        height:heightPercentageToDP(10),
        backgroundColor:colors.LIGHT_GOLDEN,
        borderRadius:widthPercentageToDP(2),
    },
    imgStyle:{
        width:'100%',
        height:'100%',
    },
    contentWrapper:{},
    buttonsWrapper:{
        flexDirection:'row',
        alignItems:'center',
        gap:widthPercentageToDP(5),
    },
    btnStyle:{
        justifyContent:'center',
        width:widthPercentageToDP(8),
        height:heightPercentageToDP(4),
        backgroundColor: colors.PRIMARY,
        borderRadius: widthPercentageToDP(2),
    },
    footer:{
        backgroundColor:colors.WHITE,
        paddingVertical:heightPercentageToDP(2),
        paddingHorizontal:widthPercentageToDP(3),
        gap:heightPercentageToDP(3),
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    footerContentWrapper:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
})

export default styles;