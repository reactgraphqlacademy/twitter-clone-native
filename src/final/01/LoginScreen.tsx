import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Screen, Headline, FormInput } from '../../components';
import Colors from '../../constants/Colors';

interface formProps {
  key: string;
  value: string;
}

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  login = () => {
    alert('LOGIN');
  };

  handleFormChange = ({ key, value }: formProps) =>
    this.setState({ [key]: value });

  render() {
    return (
      <Screen>
        <View style={styles.header}>
          <Headline>Twitter Clone</Headline>
        </View>
        <View style={styles.content}>
          <FormInput
            label="Email"
            value={this.state.email}
            onChangeText={(value) =>
              this.handleFormChange({ key: 'email', value })
            }
          />
          <FormInput
            label="Password"
            value={this.state.password}
            secureTextEntry
            onChangeText={(value) =>
              this.handleFormChange({ key: 'password', value })
            }
          />
          <Button
            onPress={this.login}
            style={styles.submitButton}
            mode="contained"
          >
            Login
          </Button>
          <TouchableOpacity onPress={() => alert('TOC!')}>
            <Text style={styles.tocText}>
              by login you accept the Terms and Conditions.
            </Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
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
