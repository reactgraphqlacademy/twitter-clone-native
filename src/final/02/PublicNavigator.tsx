import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LoginScreen,
  TermsScreen,
  TimelineScreen,
  TweetDetailScreen,
} from '../01';

const Stack = createStackNavigator();

export const LOGIN_SCREEN = 'Login';
export const TERMS_SCREEN = 'Terms';
export const TIMELINE_SCREEN = 'Timeline';
export const TWEET_DETAIL_SCREEN = 'TweetDetails';

export default function PublicStack() {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={TIMELINE_SCREEN}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen name={TIMELINE_SCREEN} component={TimelineScreen} />
      <Stack.Screen name={TWEET_DETAIL_SCREEN} component={TweetDetailScreen} />
    </Stack.Navigator>
  );
}
