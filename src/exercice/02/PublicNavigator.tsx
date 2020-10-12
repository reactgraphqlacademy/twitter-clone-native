import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, TermsScreen } from '../../final/01';

const Stack = createStackNavigator();

export default function PublicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
    </Stack.Navigator>
  );
}
