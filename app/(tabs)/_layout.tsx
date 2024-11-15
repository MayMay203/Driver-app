import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import DefaultLayout from '@/layouts/DefaultLayout';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Nhận đơn",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bill.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Lịch sử",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="history.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="income"
        options={{
          title: "Thu nhập",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="income.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="evaluate"
        options={{
          title: "Đánh giá",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="star.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Cá nhân",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="account.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
