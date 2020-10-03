import React from 'react';
import { Text } from 'react-native-paper';

export const Title = ({ style, ...rest }) => {
  const primary = rest.parentColor === 'primary';
  return (
    <Text
      h4
      style={[style, { color: primary ? 'white' : 'black' }]}
      {...rest}
    />
  );
};
