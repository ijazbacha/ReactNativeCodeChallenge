import React, { Fragment, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { AppButton, AppHeader, AppText, showToastNotification } from '../../components'
import colors from '../../services/config/colors'
import { imagePath } from '../../services/constants/images-path'
import { addToCartAction, decreaseProductQuantityAction, setProductAction } from '../../services/redux/actions/actions'
import styles from './styles'
import { getProductApi } from '../../services/apis'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import RouteNames from '../../services/constants/routes-names'

const Home = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation()
  const { products } = useSelector((state: any) => state.productReducer)
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)

  const getProduct = async () =>{
    setloading(true)
    try {
      const {data, status} = await getProductApi()
      dispatch(setProductAction(data))
      setloading(false)
    } catch (error) {
      console.log("ERROR: ", error);
      setloading(false)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  const addToCartHandler = (product:productProps) =>{
    dispatch(addToCartAction(product))
    showToastNotification({ title: "Success", description: "Product successfully add!", type: 'success' });
  }

  const productCard = ({ item }: { item: productProps }) => {
    return (
      <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate(RouteNames.ProductDetails, {product:item})}>
        <View style={styles.imgWrapper}>
          <Image source={imagePath.productPlaceholder} style={{ width: "100%", height: "100%" }} resizeMode='cover' />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.textWrapper}>
            <AppText text={item.name} />
            <AppText text={`Price: ${item.price}`} color={colors.GRAY} />
          </View>
          {
            item?.addedToCart ?
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
              :
              <AppButton onPress={() => addToCartHandler(item)} title='Add to Cart' widthInpercent='100%' height={5} />
          }
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <Fragment>
      <AppHeader title='Home' />
      <View style={styles.mainContainer}>
        <AppText text='List of Products' />
        {
          loading ? <ActivityIndicator size="large" color={colors.PRIMARY} />
            :
            <FlatList data={products} columnWrapperStyle={{ justifyContent: 'space-between' }} contentContainerStyle={{ marginTop: 10, }} keyExtractor={(item) => item.id.toString()} renderItem={productCard} numColumns={2} showsVerticalScrollIndicator={false} ListEmptyComponent={<AppText text='Product Not Found' color={colors.GRAY} textAlign='center' />} />
        }
      </View>
    </Fragment>
  )
}

export default Home