import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  placeholder?: string;
};

export default function AppInput({ placeholder, style, ...rest }: Props) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#888"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#212121',
  },
});