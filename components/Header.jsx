import { View, Text, Image } from "react-native"
import { Icon } from '@rneui/themed';
export default function Header({ title, time, mile, alert, drowsy }) {
        return (
            <View className={`p-5 bg-white w-11/12 items-center rounded-3xl ${drowsy&&"border-athena-red border-8"}`}>
                {(drowsy || time) && (
                    <View className={` rounded-2xl py-2 px-5 ${drowsy ? "bg-athena-light-red" : " bg-athena-light-purple"}`}> 
                        <Text className={`font-bold ${drowsy ? " text-athena-red" : " text-athena-bright-purple"}`}>{drowsy ? "warning" : "03.03.24"}</Text>
                        </View>
                )}

                <Text className="text-4xl font-bold text-athena-gray-500 my-5">{title}</Text>
                {(time && mile) && (
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
                    <View className="rounded-2xl py-2 px-5 bg-athena-light-purple"> 
                    <Text className="font-bold text-athena-bright-purple">{alert}% alertness</Text>
                    </View>
                )}
                {drowsy && (
                    <View className="w-full p-2.5 bg-athena-gray-200 flex-row justify-center items-center rounded-full">
                        <Icon
                            name="hourglass-half"
                            size={17}
                            type="font-awesome"
                            color="#545454"
                        />
                        <Text className=" font-bold text-athena-gray-500 ml-2">redirecting to music...</Text>
                    </View>
                )}
          </View>
      );
  }