import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#101827" />
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#101827' },
        animation: 'fade',
        gestureEnabled: false
      }} />
    </GestureHandlerRootView>
  );
}
