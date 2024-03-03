import { View, Text } from "react-native";
import Recommendations from "@/components/Recommendations";
export default function SummaryElement({ summarytitle }) {
  return (
    <View className="p-5 bg-white w-full items-center rounded-2xl outline outline-2 outline-">
      <Text className="text-4xl font-extrabold">{summarytitle}</Text>
      <Recommendations />
    </View>
  );
}
