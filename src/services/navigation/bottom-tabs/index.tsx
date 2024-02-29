import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import appScreens from '../../../screens';
import colors from '../../config/colors';
import RouteNames from '../../constants/routes-names';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const screenOption = {
    tabBarActiveTintColor: colors.PRIMARY,
    tabBarInactiveTintColor: colors.GRAY,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle:{height: hp(7)},
    tabBarHideOnKeyboard: true,
  }

function BottomTabNavigator() {
  const {cartProducts} = useSelector((state:any) => state.cartReducer)

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={screenOption}
    >
      <Tab.Screen
        name={RouteNames.Home}
        component={appScreens.Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" type='ionicon' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteNames.Cart}
        component={appScreens.Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type='antdesign' name="shoppingcart" color={color} size={size} />
          ),
          tabBarBadge:cartProducts.length
        }}
      />
      <Tab.Screen
        name={RouteNames.CreateProduct}
        component={appScreens.CreateProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type='ionicon'  name="create-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;