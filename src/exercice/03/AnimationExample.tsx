import React from 'react';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

export function AnimationExample() {
  return (
    <View
      style={{
        backgroundColor: Colors.light.tint,
        height: 100,
        width: 100,
      }}
    />
  );
}
