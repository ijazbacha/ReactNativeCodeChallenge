import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../services/config/colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import fonts from '../../services/config/fonts'
import { AppText } from '..'
import { Icon } from 'react-native-elements'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import RouteNames from '../../services/constants/routes-names'
import { useSelector } from 'react-redux'

type headerTypes = {
    title: string;
}

const AppHeader = ({ title }: headerTypes) => {
    const navigation:NavigationProp<ParamListBase> = useNavigation()
    const {cartProducts} = useSelector((state:any) => state.cartReducer)
    return (
        <View style={styles.headerWarpper}>
            <AppText text={title} fontFamily={fonts.SEMIBOLD} fontSize={5} color={colors.WHITE} />
            <TouchableOpacity style={styles.cartWarpper} onPress={() => navigation.navigate(RouteNames.Cart)}>
                <Text style={styles.cartCount}>{cartProducts.length}</Text>
                <Icon type='antdesign' name='shoppingcart' color={colors.WHITE} size={35} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWarpper: {
        backgroundColor: colors.PRIMARY,
        paddingHorizontal: widthPercentageToDP(4),
        paddingVertical: heightPercentageToDP(2),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    cartWarpper: {
        flexDirection: 'row',
    },
    cartCount: {
        position: 'absolute',
        right: -5,
        top: -6,
        zIndex: 999,
        width:widthPercentageToDP(6),
        height:heightPercentageToDP(3),
        borderRadius: widthPercentageToDP(3),
        textAlign: 'center',
        color: colors.WHITE,
        backgroundColor: colors.ERROR,
    }
})

export default AppHeader