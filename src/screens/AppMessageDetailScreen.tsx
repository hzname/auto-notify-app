import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppMessageDetailScreen({ navigation, route }) {
  const { vehicleId } = route.params || {};
  // TODO: fetch message details for vehicleId
  return (
    <View style={styles.container}>
      <Text style={styles.title}>\u0414\u0435\u0442али &#123;vehicleId&#125;</Text>
      <Text>\u0417десь поточна описания.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
});