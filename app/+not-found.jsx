import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text>Not found</Text>
    </>
  );
}
