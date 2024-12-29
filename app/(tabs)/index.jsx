import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [LoginFocused, setLoginFocused] = React.useState(false); // Track focus state
  const [PasswordFocused, setPasswordFocused] = React.useState(false); // Track focus state
  const focusedColor = '#234ae2'

  return (
    <LinearGradient colors={['#0f0f34', '#03030f']} style={styles.linearGradient}>
      <View style={[styles.centeredView, { paddingVertical: 150 }]}>
        <View style={[styles.centeredView, { flex: 1 }]}>
          <Text style={styles.text}>Добро пожаловать!</Text>
          <Text style={styles.text}>Вход</Text>
        </View>
        <View style={[styles.centeredView, { flex: 15 }]}>
          <TextInput
            style={[styles.input, styles.text, LoginFocused && { borderColor: focusedColor }]} // Conditional styling
            onFocus={() => setLoginFocused(true)}
            onBlur={() => setLoginFocused(false)}
            placeholder="Введите логин"
            placeholderTextColor="rgba(255,255,255,0.5)"
          />
          <TextInput
            style={[styles.input, styles.text, PasswordFocused && { borderColor: focusedColor }]} // Conditional styling
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            placeholder="Введите пароль"
            placeholderTextColor="rgba(255,255,255,0.5)"
          />
          <Link style={[styles.text, styles.btn]} href="/connect">
            Войти
          </Link>
        </View>
      </View>
    </LinearGradient>

  );
}

// Optional layout configuration
export const layoutOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0)", // Default border color
    paddingHorizontal: 25,
    paddingVertical: 32,
    outlineStyle: 'none',
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.05)",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    fontSize: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: "white",
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "rgba(186, 107, 255, 0.5)",
    paddingHorizontal: 40,
    paddingVertical: 13,
    outlineStyle: 'none',
    marginVertical: 30,
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  }
});
