import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";

export default function Callsomeone() {
  return (
    <View className="items-center flex-row bg-white w-11/12 p-5 rounded-3xl mt-3 border-[6px] border-athena-dark-purple">
      <Icon
        size={40}
        color="#B080FF"
        type="font-awesome-5"
        name="phone-square-alt"
      />
      <Text className=" ml-4 text-2xl font-extrabold text-athena-gray-500">
        Call Someone...
      </Text>
    </View>
  );
}
