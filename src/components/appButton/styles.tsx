import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import colors from '../../services/config/colors'
import fonts from '../../services/config/fonts'

const styles = StyleSheet.create({
    btnWrapper:{
        borderRadius: wp(2),
        alignItems:'center',
        justifyContent:'space-evenly',
        alignSelf:"center"
    },
    btnText:{
        color:colors.WHITE,
        fontFamily:fonts.SEMIBOLD,
        fontSize:wp(4)
    }
})

export default styles