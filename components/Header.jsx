import { View, Text } from "react-native"
import { Icon } from '@rneui/themed';
export default function Header({ title, time, mile, alert, drowsy,summary }) {
        return (
            <View className="p-5 bg-white w-full items-center rounded-2xl">
                {(summary || drowsy || time) && (
                    <View className={` rounded-2xl py-2 px-5 ${drowsy ? "bg-athena-light-red" : " bg-athena-light-purple"}`}> 
                        <Text className={`font-bold ${drowsy ? " text-athena-red" : " text-athena-bright-purple"}`}>{drowsy ? "warning" : "03.02.24"}</Text>
                        </View>
                )}

                <Text className="text-4xl font-bold text-athena-gray-500 my-5">{title}</Text>
                {((time && mile)||summary) && (
                    <View className="flex-row">
                    <View className=" flex-row m-1 bg-athena-gray-100 py-2.5 px-8 rounded-xl items-center">
                        <Icon
                                name='clock-o'
                                size={20}
                            type='font-awesome'
                            color='#545454'/>
                        <Text className="ml-1 font-semibold">{mile} miles</Text>
                    </View>
                    <View className="flex-row m-1 bg-athena-gray-100 py-2.5 px-8 rounded-xl items-center">
                    <Icon
                                name='map-marked-alt'
                                size={20}
                            type='font-awesome-5'
                            color='#545454'/>
                        <Text className="ml-1 font-semibold">{time} mins</Text>
                    </View>
                </View>
                )}
                {alert && (
                    <Text className="p-2 bg-opacity-20 bg-athena-bright-purple text-athena-bright-purple">{alert}% alertness</Text>
                )}
                {drowsy && (
                    <View className="w-full p-2 bg-athena-gray-200">
                        <Icon
                            name="hourglass-half"
                            type="font-awesome"
                            color="#545454"
                        />
                        <Text className=" text-athena-gray-500">redirecting to music...</Text>
                    </View>
                )}
          </View>
      );
  }