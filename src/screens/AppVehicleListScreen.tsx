import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppButtonPrimary from '../components/AppButtonPrimary';

const dummyVehicles = [
  { id: '1', plate: 'A123BC', model: 'Toyota' },
  { id: '2', plate: 'X987YZ', model: 'Kia' },
];

export default function AppVehicleListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('message-detail', { vehicleId: item.id })}
    >
      <Text style={styles.itemText}>{item.model} – {item.plate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваши автомобили</Text>
      <FlatList
        data={dummyVehicles}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
      <AppButtonPrimary title="+ Добавить автомобиль" onPress={() => navigation.navigate('add-vehicle')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  list: {
    flex: 1,
    marginBottom: 12,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  itemText: {
    fontSize: 16,
  },
});