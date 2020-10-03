import React from 'react';
import { Text } from 'react-native-paper';

interface SubHeadingProps {
  children: string;
}

export const SubHeading = ({ children, ...rest }: SubHeadingProps) => (
  <Text
    style={[
      {
        fontSize: 14,
        opacity: 0.6,
      },
    ]}
    h4
    {...rest}
  >
    {children.toUpperCase()}
  </Text>
);
