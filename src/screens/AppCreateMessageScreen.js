import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButtonPrimary from '../components/AppButtonPrimary';
import AppInput from '../components/AppInput';

export default function AppCreateMessageScreen({ navigation, route }) {
  const { vehicleId } = route.params || {};
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

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

  const handleSend = () => {
    // TODO: POST /v1/messages with image, text, vehicleId
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u0430\u043c \u043e \u043c\u0430\u0448\u0438\u043d\u0443</Text>
      <AppButtonPrimary title="\u0421\u043d\u0430\u043f\u0430\u0442\u044c \u0444\u043e\u0442\u043e" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <AppInput
        placeholder="\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"
        multiline
        numberOfLines={4}
        style={styles.input}
        value={message}
        onChangeText={setMessage}
      />
      <AppButtonPrimary title="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    fontSize: 14,
    textAlignVertical: 'top',
  },
});