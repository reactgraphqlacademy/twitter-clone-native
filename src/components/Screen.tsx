import React, { ReactNode } from 'react';
import { View, SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

interface ScreenProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Screen = ({ style, children, ...rest }: ScreenProps) => {
  const colorScheme = useColorScheme();

  return (
    <React.Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: Colors[colorScheme].tintPastel }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[style, { flex: 1 }]}>{children}</View>
      </SafeAreaView>
    </React.Fragment>
  );
};
