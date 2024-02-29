import { View, Text, ScrollView } from 'react-native'
import React, { Fragment, useState } from 'react'
import { AppButton, AppHeader, AppText, SimpleInput, showToastNotification } from '../../components'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../../services/redux/actions/actions'
import { createProductApi } from '../../services/apis'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import RouteNames from '../../services/constants/routes-names'

const CreateProduct = () => {
  const navigation:NavigationProp<ParamListBase> = useNavigation()
  const { products } = useSelector((state: any) => state.productReducer)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const createProduct = async (name:string, price:string) =>{
    setLoading(true)
    const payload = {
      name,
      price,
      img:'string',
      id:products.length
    }
    try {
      await createProductApi(payload)
      dispatch(addProductAction(payload))
      navigation.navigate(RouteNames.Home)
    showToastNotification({ title: "Success", description: "Product successfully created!", type: 'success' });
      setLoading(false)
    } catch (error) {
      console.log("ERROR: ", error);
      setLoading(false)
    }
  }

  const isFilled = name == '' || price == ''
  return (
    <Fragment>
      <AppHeader title='Create Product' />
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.inputWrapper}>
            <AppText text='name' />
            <SimpleInput placeholder='Type product name' setValue={setName} value={name} />
          </View>

          <View style={styles.inputWrapper}>
            <AppText text='Price' />
            <SimpleInput placeholder='Type price' setValue={setPrice} value={price} keyboardType={"number-pad"} />
          </View>

          <AppButton title='Create Product' onPress={() => createProduct(name, price)} isDisable={isFilled} isLoading={loading} />
        </ScrollView>
      </View>
    </Fragment>
  )
}

export default CreateProduct