import { View, Text } from "react-native";
import Recommendations from "@/components/Recommendations";
export default function SummaryElement({ summarytitle }) {
  return (
    <View className="p-5 bg-white w-full items-center rounded-2xl">
      <Text className="text-4xl">{summarytitle}</Text>
      <Recommendations/>
    </View>
  );
}
