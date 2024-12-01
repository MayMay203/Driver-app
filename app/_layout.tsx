import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detailOrder" options={{ headerShown: true, title: 'Chi tiết hoá đơn' }} />
      <Stack.Screen name="notification" options={{ headerShown: true, title: 'Thông báo' }} />
      <Stack.Screen name="message" options={{ headerShown: true, title: 'Tin nhắn' }} />
      <Stack.Screen name="detailMessage" options={{ headerShown: true, title: 'Chi tiết tin nhắn' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
