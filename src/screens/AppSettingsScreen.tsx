import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import AppButtonPrimary from '../components/AppButtonPrimary';

export default function AppSettingsScreen({ navigation }) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>\u0421\u043d\u0430\u0442\u0440\u043e\u043a\u0438</Text>
      <View style={styles.row}>
        <Text>\u0422емная тема</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <AppButtonPrimary title="\u0412ыход\u0438\u0442\u044c \u0432ыло\u043d\u0438\u0442" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 12 },
});