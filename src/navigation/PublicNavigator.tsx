import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../final/01/LoginScreen';
import TOSScreen from '../screens/TermsScreen';

/*
  1. create a Stack Navigator that shows the LoginScreen
  & the Terms and Conditions screen

  2. Add some options to the navigator
    - headerMode: none
    - initialRouteName: LOGIN_SCREEN (optional)
    - mode: 'modal'

  Hints:
  - use the strings above to name your screens to maintain
  consistency when navigating.
*/

const Stack = createStackNavigator();

function PublicStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={TOSScreen}
        options={{
          title: 'Terms',
        }}
      />
    </Stack.Navigator>
  );
}
