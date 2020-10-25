// 1. run tsrnf + tab

// 2. Delete the imports
import React from 'react';
import { TouchableOpacity, Linking, Text } from 'react-native';

// Refactor this code using the types string and StyleProp
export const ExternalLink = ({ style, url, title = 'External Link' }) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Text style={style}>{title}</Text>
  </TouchableOpacity>
);
