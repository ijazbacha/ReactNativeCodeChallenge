import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RouteNames from "../../constants/routes-names"
import appScreens from "../../../screens"
import BottomTabNavigator from "../bottom-tabs"

const options ={
    headerShown:false
}

const Stack = createNativeStackNavigator()

const StackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={RouteNames.BottomTab} component={BottomTabNavigator} />
            <Stack.Screen name={RouteNames.ProductDetails} component={appScreens.ProductDetails} />
        </Stack.Navigator>
    )
}

export default StackNavigator