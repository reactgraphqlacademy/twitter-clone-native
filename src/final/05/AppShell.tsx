import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Headline } from 'react-native-paper';
import { NetworkProvider } from 'react-native-offline';
import Offline from './Offline';

interface Props {
  title: string;
  children?: ReactElement;
}

const AppShell = (props: Props) => {
  return (
    <NetworkProvider>
      <Offline />
      <View style={styles.container}>
        <Headline style={styles.headline}>{props.title}</Headline>
        {props.children}
      </View>
    </NetworkProvider>
  );
};

export default AppShell;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 36,
    backgroundColor: Colors.grey100,
  },
  headline: {
    marginBottom: 24,
  },
});
