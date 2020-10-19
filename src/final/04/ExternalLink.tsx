import React, { ReactElement } from 'react';
import {
  TouchableOpacity,
  Linking,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';

interface ExternalLinkProps {
  style: StyleProp<TextStyle>;
  url: string;
  title: string;
}

export default function ExternalLink({
  style,
  url,
  title = 'External Link',
}: ExternalLinkProps): ReactElement {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
}
