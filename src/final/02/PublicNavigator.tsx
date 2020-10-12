import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, TermsScreen, TimelineScreen } from '../01';

const Stack = createStackNavigator();

export const LOGIN_SCREEN = 'Login';
export const TERMS_SCREEN = 'Terms';
export const TIMELINE_SCREEN = 'Timeline';

export default function PublicStack() {
  return (
    <Stack.Navigator
      headerMode={'none'}
      mode={'modal'}
      initialRouteName={TIMELINE_SCREEN}
    >
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen name={TIMELINE_SCREEN} component={TimelineScreen} />
    </Stack.Navigator>
  );
}
