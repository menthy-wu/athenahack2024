import { View, Text, Image } from "react-native";
import { Icon } from "@rneui/themed";

export default function WhoCall() {
  return (
    <View className="bg-white p-4 rounded-xl w-11/12">
      <View className="flex-row">
        <View className="bg-athena-dark-purple px-2 py-1.5 rounded-lg ">
          <Icon
            size={20}
            color="#FFF"
            type="font-awesome-5"
            name="microphone"
          />
        </View>
        <Text className=" ml-2 font-extrabold text-lg">
          Who are you contacting?
        </Text>
      </View>
      <View className=" border-athena-dark-purple border-4 rounded-3xl p-3 mt-2">
        <Text className=" text-lg font-bold">Tim...</Text>
      </View>
    </View>
  );
}
