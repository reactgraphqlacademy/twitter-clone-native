import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Screen, Headline, FormInput } from '../../components';
import Colors from '../../constants/Colors';
import { TERMS_SCREEN } from '../../exercice/02/PublicNavigator';

export default function LoginScreen({ navigation: { navigate } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    alert('LOGIN');
  }

  function handleTerms() {
    navigate(TERMS_SCREEN);
  }

  return (
    <Screen>
      <View style={styles.header}>
        <Headline>Twitter Clone</Headline>
      </View>
      <View style={styles.content}>
        <FormInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <FormInput
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
        <TouchableOpacity onPress={handleTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    height: 140,
    backgroundColor: Colors.light.tintPastel,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 8,
    backgroundColor: Colors.light.tint,
  },
  tocText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.light.tabIconDefault,
  },
});
