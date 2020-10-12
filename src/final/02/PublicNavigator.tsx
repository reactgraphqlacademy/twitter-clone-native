import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, TermsScreen } from '../01';

const Stack = createStackNavigator();

export const LOGIN_SCREEN = 'Login';
export const TERMS_SCREEN = 'Terms';

export default function PublicStack() {
  return (
    <Stack.Navigator
      headerMode={'none'}
      mode={'modal'}
      initialRouteName={LOGIN_SCREEN}
    >
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
}
