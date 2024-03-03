import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import SummaryElement from "@/components/SummaryElement";

export default function SettingScreen() {
  return (
    <View className="flex items-center justify-center h-full bg-white">
      <Text>Setting</Text>
      <SummaryElement summarytitle="hello" />
    </View>
  );
}
