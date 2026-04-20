import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButtonPrimary from '../components/AppButtonPrimary';
import AppInput from '../components/AppInput';

export default function AppAddVehicleScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [plate, setPlate] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });
    if (!result.cancelled) setImage(result.uri);
  };

  const handleSave = () => {
    // TODO: OCR and POST vehicle
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c</Text>
      <AppButtonPrimary title="\u0421\u043d\u0430\u043f\u0430\u0442\u044c \u0444\u043e\u0442\u043e" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <AppInput placeholder="\u041d\u043e\u043c\u0435\u0440 \u043d\u043e\u043c\u0435\u0440\u0430 (\u0430\u0432\u0442\u043e)" value={plate} onChangeText={setPlate} />
      <AppButtonPrimary title="\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 12,
    borderRadius: 4,
  },
});