import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const ViewLoading = () => (
  <View style={{ padding: 24 }}>
    <ActivityIndicator color="#000" />
  </View>
);
