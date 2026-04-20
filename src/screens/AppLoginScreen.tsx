import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import AppButtonPrimary from '../components/AppButtonPrimary';

// Yandex OAuth config – replace env vars in .env (frontend) or use constants for demo
const YANDEX_CLIENT_ID = 'YOUR_YANDEX_CLIENT_ID';
const YANDEX_REDIRECT_URI = AuthSession.makeRedirectUri({
  // For Expo dev client use your scheme
  // scheme: 'myapp', // uncomment and set in app.json if needed
});

export default function AppLoginScreen({ navigation }) {
  const [consentGiven, setConsentGiven] = useState(false);
  const [authInProgress, setAuthInProgress] = useState(false);

  const handleYandexLogin = async () => {
    if (!consentGiven) return;
    try {
      setAuthInProgress(true);
      const discovery = {
        authorizationEndpoint: 'https://oauth.yandex.ru/authorize',
        tokenEndpoint: 'https://oauth.yandex.ru/token',
      };
      const result = await AuthSession.startAsync({
        authUrl:
          `${discovery.authorizationEndpoint}?response_type=code&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${encodeURIComponent(
            YANDEX_REDIRECT_URI
          )}`,
        returnUrl: YANDEX_REDIRECT_URI,
      });
      if (result.type !== 'success') {
        Alert.alert('Auth cancelled or failed');
        return;
      }
      const { code } = result.params;
      // Exchange code for token via backend
      const tokenRes = await fetch('http://localhost:3000/api/auth/yandex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, redirect_uri: YANDEX_REDIRECT_URI }),
      });
      const tokenData = await tokenRes.json();
      if (!tokenRes.ok) throw new Error(tokenData.error || 'Token exchange failed');
      // Store consent (demo)
      await fetch('http://localhost:3000/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: tokenData.access_token, consentGiven: true }),
      });
      // Navigate to app main flow
      navigation.replace('vehicle-list');
    } catch (e) {
      console.error(e);
      Alert.alert('Login error', e.message);
    } finally {
      setAuthInProgress(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в AutoNotify</Text>
      <View style={styles.consentRow}>
        <Switch value={consentGiven} onValueChange={setConsentGiven} />
        <Text style={styles.consentText}>
          Я соглашаюсь с политикой конфиденциальности и даю согласие на обработку персональных данных.
        </Text>
      </View>
      <AppButtonPrimary
        title="Войти через Yandex"
        onPress={handleYandexLogin}
        disabled={!consentGiven || authInProgress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  consentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  consentText: {
    marginLeft: 8,
    flexShrink: 1,
  },
});
