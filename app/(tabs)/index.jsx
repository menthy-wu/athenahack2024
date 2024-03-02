import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View className = "flex-1 justify-center items-center">
      <Text className = "font-bold text-xl">Tab One</Text>
      <View className="my-8 h-1 w-4/5" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
};
