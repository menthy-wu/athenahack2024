import { Icon } from "@rneui/base";
import { useContext, useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { DataContext } from "./dataContext";

const Live = () => {
  const { data, setData } = useContext(DataContext);
  useEffect(() => {},);
  return (
    <View className="bg-white w-11/12 flex-row justify-between rounded-full px-3 py-2">
      <Text>
        {new Date(new Date() - data.start).getHours()}:
        {new Date(new Date() - data.start).getMinutes()}:
        {new Date(new Date() - data.start).getSeconds()}
      </Text>
      <View className="flex-row">
        <Icon
          type="font-awesome-5"
          color="#B080FF"
          size={15}
          name="broadcast-tower"
        />
        <Text className="ml-1 text-athena-dark-purple font-extrabold">
          live
        </Text>
      </View>
    </View>
  );
};

export default Live;
