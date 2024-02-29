import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import fonts from '../../services/config/fonts'
import { AppButton, AppHeader, AppText } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'
import { Image } from 'react-native'
import { imagePath } from '../../services/constants/images-path'
import colors from '../../services/config/colors'
import { Icon } from 'react-native-elements'
import { addToCartAction, decreaseProductQuantityAction, removeFromCartAction } from '../../services/redux/actions/actions'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartProducts } = useSelector((state: any) => state.cartReducer)
  let totalAmount = cartProducts?.map(
    (item: any) => JSON.parse(item.price) * item.quantity,
  );
  totalAmount = totalAmount.reduce(function (accumulator: any, currentValue: any) {
    return accumulator + currentValue;
  }, 0);

  const cartCard = ({ item }: { item: productProps }) => {
    return (
      <View style={styles.cardWrapper}>
        <View style={styles.rowContainer}>
          <View style={styles.imgWrapper}>
            <Image source={imagePath.productPlaceholder} resizeMode='cover' style={styles.imgStyle} />
          </View>
          <View style={styles.contentWrapper}>
            <AppText text={item.name} />
            <AppText text={`Price: ${JSON.parse(item.price) * item.quantity}`} color={colors.GRAY} fontFamily={fonts.SEMIBOLD} />
            <View style={styles.buttonsWrapper}>
              <TouchableOpacity style={styles.btnStyle} onPress={() => dispatch(decreaseProductQuantityAction(item.id))}>
                <Icon
                  name="minus"
                  type="entypo"
                  color={colors.WHITE}
                  size={20}
                />
              </TouchableOpacity>

              <AppText text={item?.quantity ? item?.quantity : 0} />

              <TouchableOpacity style={styles.btnStyle} onPress={() => dispatch(addToCartAction(item))}>
                <Icon
                  name="plus"
                  type="entypo"
                  color={colors.WHITE}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => dispatch(removeFromCartAction(item.id))}>
          <Icon
            name="cross"
            type="entypo"
            color={colors.ERROR}
            size={30}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <Fragment>
      <AppHeader title='Cart' />
      <View style={styles.mainContainer}>
        <FlatList data={cartProducts} renderItem={cartCard} keyExtractor={item => item.id.toString()} ListEmptyComponent={<AppText text='Cart is empty' color={colors.GRAY} textAlign='center' />} />
        <View style={styles.footer}>
          <View style={styles.footerContentWrapper}>
            <AppText text='Total Amount: ' fontFamily={fonts.SEMIBOLD} />
            <AppText text={totalAmount} fontFamily={fonts.SEMIBOLD} />
          </View>
          <AppButton title='Check out' onPress={() => console.log()} />
        </View>
      </View>
    </Fragment>
  )
}

export default Cart