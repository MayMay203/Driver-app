import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detailOrder" options={{ headerShown: true }} />
      <Stack.Screen name="notification" options={{ headerShown: true }} />
      <Stack.Screen name="message" options={{ headerShown: true }} />
      <Stack.Screen name="detailMessage" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
