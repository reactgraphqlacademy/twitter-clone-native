import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';

import { NetworkProvider } from 'react-native-offline';
import Offline from './Offline';

interface Props {}

const StarshipScreen = (props: Props) => {
  return (
    <NetworkProvider>
      <View style={styles.container}>
        <Headline>Starships</Headline>
        <Offline />
      </View>
    </NetworkProvider>
  );
};

export default StarshipScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
  },
});
