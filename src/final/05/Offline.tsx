import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';
import { NetworkConsumer } from 'react-native-offline';

export default function Offline() {
  return (
    <NetworkConsumer>
      {({ isConnected }) =>
        !isConnected && (
          <View style={styles.container}>
            <Text style={styles.message}>
              Offline, reconnection in progress…
            </Text>
            <ActivityIndicator animating={true} color={Colors.red800} />
          </View>
        )
      }
    </NetworkConsumer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: 'absolute',
    top: 55,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: Colors.red800,
  },
});
