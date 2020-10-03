import React from 'react';
import { View, SafeAreaView } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export const Screen = ({ style = {}, children, ...rest }) => {
  const colorScheme = useColorScheme();

  return (
    <React.Fragment>
      <SafeAreaView
        style={[style, { flex: 0, backgroundColor: Colors[colorScheme].tint }]}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </React.Fragment>
  );
};
