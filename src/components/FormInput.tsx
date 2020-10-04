import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

interface FormInputProp {
  label: string;
  value: string;
  onChangeText: () => void;
}

export const FormInput = ({
  label,
  value,
  onChangeText,
  ...rest
}: FormInputProp) => (
  <View style={{ paddingVertical: 8 }}>
    <TextInput
      {...rest}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);
