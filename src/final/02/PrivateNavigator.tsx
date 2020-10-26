import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TimelineScreen, TweetDetailScreen } from '../01';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export default function PrivateStack() {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName={AppRoute.TIMELINE_SCREEN}
    >
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
