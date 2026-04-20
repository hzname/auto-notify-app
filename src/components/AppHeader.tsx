import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

export default function AppHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#2E8BFA',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
});