import { View, Text } from "react-native"
import { Icon } from "@rneui/themed";
export default function Report({title, text, type}) {
        return (
            <View className={`my-2 p-2 w-full rounded-2xl ${type==="drowsy"?"border-l-athena-bright-purple":type==="call"?"border-l-athena-dark-purple":"border-l-athena-blue"} border-y-athena-gray-200 border-r-athena-gray-200 border-l-[10px] border-y-[3px] border-r-[3px]`}>
                <View className="flex-row items-center">
                    <View className={`px-2 py-1.5  rounded-xl bg-athena-bright-purple ${type==="drowsy"?"bg-athena-bright-purple":type==="call"?"bg-athena-dark-purple":"bg-athena-blue"}`}>
                    <Icon
                        name='clock-o'
                        size={20}
                        type='font-awesome'
                            color="#FFF" />
                        </View>
                    <Text className="ml-3 text-base font-extrabold">{title}</Text>
                </View>
                <View className="border-[3px] rounded-2xl border-gray-200 ml-[15%] w-5/6 px-1.5 py-2.5">
                    <View className="flex-row items-center mb-2">
                    <Icon name="sparkles" size={15} type="ionicon" color="#7F7F7F" />
                        <Text className="font-bold text-athena-gray-500 ml-1">Recommendation</Text>
                        </View>
                    <Text className="font-bold">{text}</Text>
                </View>

          </View>
      );
  }