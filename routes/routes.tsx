import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../screens/Home';
import Blank from '../screens/Blank';
import {RootStackParamList} from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();
const AppStack = createStackNavigator<RootStackParamList>();

const AppStackScreen = () => {
  return (
    <View>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
      </AppStack.Navigator>
    </View>
  );
};

const RootApp = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={Blank}
          options={{gestureEnabled: false, headerShown: false}}
        />
        <RootStack.Screen
          name="App"
          component={AppStackScreen}
          options={{gestureEnabled: false, headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
