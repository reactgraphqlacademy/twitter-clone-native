import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LoginScreen,
  TermsScreen,
  TimelineScreen,
  TweetDetailScreen,
} from '../01';
import { AppRoute } from './AppRoutes';
import { ProfileScreen } from '../01/ProfileScreen';

const Stack = createStackNavigator();

export default function PublicStack() {
  return (
    <Stack.Navigator initialRouteName={AppRoute.LOGIN_SCREEN}>
      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen
        name={AppRoute.TIMELINE_SCREEN}
        component={TimelineScreen}
        options={{ title: 'Timeline' }}
      />
      <Stack.Screen
        name={AppRoute.TWEET_DETAIL_SCREEN}
        component={TweetDetailScreen}
        options={{ title: 'Tweet' }}
      />
      <Stack.Screen
        name={AppRoute.OTHER_USER_PROFILE}
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}
