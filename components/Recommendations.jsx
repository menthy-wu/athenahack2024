import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";
export default function Recommendations({ message }) {
  return (
    <View className="p-5 bg-white w-full items-center rounded-2xl">
      <View className="flex-row justify-center items-center justify-items-center gap-2 text-black opacity-50">
        <Icon name="sparkles" type="ionicon" color="#545454" />

        <Text className="font-semibold">Recommendations</Text>
      </View>

      <Text className="text-lg">{message}</Text>
    </View>
  );
}
