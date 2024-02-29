import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NotifierWrapper } from 'react-native-notifier';
import { Provider } from 'react-redux';
import colors from './src/services/config/colors';
import MainNavigator from './src/services/navigation';
import { store } from './src/services/redux/store';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} />
      <Provider store={store}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NotifierWrapper>
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            </NotifierWrapper>
          </GestureHandlerRootView>
      </Provider>
    </>
  )
}

export default App