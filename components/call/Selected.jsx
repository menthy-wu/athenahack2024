import { View, Text, Image } from "react-native";
import { Icon } from "@rneui/themed";

const Selected = () => {
  return (
    <View className="w-11/12 bg-white py-5 px-8 rounded-2xl">
      <View className="flex-row w-full justify-between">
        <Text className="text-xl font-extrabold text-athena-gray-500">
          Contact selected
        </Text>
        <Icon type="font-awesome-5" name="check-circle" color="#CC7AFF" />
      </View>
      <View className="p-3 border-[6px] border-athena-bright-purple rounded-2xl items-center my-4">
        <View className="rounded-full p-2 bg-athena-gray-100">
          <Image
            source={require("@/public/image.png")}
            className="w-40 h-40 rounded-full"
          />
        </View>
        <Text className="text-2xl font-extrabold">Menthy Wu</Text>
        <Text className="font-bold text-athena-gray-500">800 812 960</Text>
      </View>
      <View className="w-full p-2.5 bg-athena-gray-200 flex-row justify-center items-center rounded-full">
        <Icon
          name="hourglass-half"
          size={17}
          type="font-awesome"
          color="#545454"
        />
        <Text className=" font-bold text-athena-gray-500 ml-2">calling</Text>
      </View>
    </View>
  );
};

export default Selected;
