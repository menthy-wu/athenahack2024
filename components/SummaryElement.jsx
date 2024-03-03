import { View, Text } from "react-native";
import Recommendations from "@/components/Recommendations";
import { Icon } from "@rneui/themed";
export default function SummaryElement({ summarytitle, message }) {
  return (
    <View className="p-5 bg-white w-full items-center rounded-2xl border-solid border-2 border-athena-gray-25 border-l-4 gap-4 grid-col-1 items-start align-top ">
      <View className="flex-row gap-3 items-start justify-start align-top pb-5">
        <View className=" bg-athena-pastel-purple p-3 rounded-xl w-auto h-15 ">
          <Icon name="sparkles" type="ionicon" color="#fff" size="15px" />
        </View>

        <Text className="text-3xl font-extrabold whitespace-nowrap">{summarytitle}</Text>
      </View>
      <Recommendations message={message} />
    </View>
  );
}
