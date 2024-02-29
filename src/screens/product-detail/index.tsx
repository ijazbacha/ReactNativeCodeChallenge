import { NavigationProp, ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppButton, AppText, showToastNotification } from '../../components';
import { deleteProductApi } from '../../services/apis';
import fonts from '../../services/config/fonts';
import { imagePath } from '../../services/constants/images-path';
import RouteNames from '../../services/constants/routes-names';
import { deleteProductAction } from '../../services/redux/actions/actions';
import styles from './styles';
import colors from '../../services/config/colors';

const ProductDetails = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const route: RouteProp<any> = useRoute()
    const { product } = route.params || {};


    const deleteProduct = async (id: number) => {
        setLoading(true)
        try {
            await deleteProductApi(id)
            dispatch(deleteProductAction(id))
            navigation.navigate(RouteNames.Home)
            showToastNotification({ title: "Success", description: "Product successfully deleted!", type: 'success' });
            setLoading(false)
        } catch (error) {
            console.log("ERROR: ", error);
            setLoading(false)
        }
    }
    return (
        <Fragment>
            <StatusBar backgroundColor={colors.PRIMARY} />
            <View style={styles.mainContainer}>
                <View style={styles.imageWrapper}>
                    <Image source={imagePath.productPlaceholder} style={styles.imgStyle} resizeMode='cover' />
                </View>
                <View style={{
                    paddingHorizontal: 20,
                    flex: 1,
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "space-between",
                            paddingTop: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.LIGHT_GOLDEN
                        }}>
                            <AppText text={product.name} color={colors.BLACK} fontFamily={fonts.SEMIBOLD} textTransform='capitalize' />
                            <AppText text={product.price} color={colors.BLACK_VARIENT} fontFamily={fonts.BOLD} />
                        </View>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <AppButton title='Delete Product' onPress={() => deleteProduct(product.id)} isLoading={loading} bgColor={colors.ERROR} />
                    </View>

                </View>
            </View>
        </Fragment>
    )
}

export default ProductDetails;