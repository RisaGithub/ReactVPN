import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent', // No background
          elevation: 0, // Removes shadow on Android
          shadowOpacity: 0, // Removes shadow on iOS
          borderBottomWidth: 0, // Removes border line
        },
        headerTitle: '', // No title globally
        headerBackTitleVisible: false, // Hides back button text globally
      }}
    >

      <Stack.Screen name="(tabs)/connect" options={{
        headerShown: false, // Hides the header specifically for the index page
      }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      <Stack.Screen
        name="(tabs)/index"
        options={{
          headerShown: false, // Hides the header specifically for the index page
        }}
      />
    </Stack>
  );
}
