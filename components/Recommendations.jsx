import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";
export default function Recommendations({ message }) {
  return (
    <View className="p-5 bg-white w-full items-center rounded-2xl border-solid border-2  border-athena-gray-50 flex-col items-start">
      <View className="flex-row justify-center items-center justify-items-center gap-2 text-black opacity-50">
        <Icon name="sparkles" type="ionicon" color="#545454" />

        <Text className="font-semibold text-lg">Recommendations</Text>
      </View>

      <Text className="text-lg font-semibold text-athena-gray-500">{message}</Text>
    </View>
  );
}
