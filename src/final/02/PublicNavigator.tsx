import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LoginScreen,
  TermsScreen,
  TimelineScreen,
  TweetDetailScreen,
} from '../01';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export default function PublicStack() {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName={AppRoute.LOGIN_SCREEN}
    >
      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen
        name={AppRoute.TIMELINE_SCREEN}
        component={TimelineScreen}
      />
      <Stack.Screen
        name={AppRoute.TWEET_DETAIL_SCREEN}
        component={TweetDetailScreen}
      />
    </Stack.Navigator>
  );
}
