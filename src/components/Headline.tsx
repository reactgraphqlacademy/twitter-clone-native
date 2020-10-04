import React from 'react';
import { Headline as HeadlinePaper } from 'react-native-paper';

export const Headline = ({ parentColor = 'primary', children, ...rest }) => {
  const primary = parentColor === 'primary';
  return (
    <HeadlinePaper style={{ color: primary ? 'white' : 'black' }} {...rest}>
      {children}
    </HeadlinePaper>
  );
};
