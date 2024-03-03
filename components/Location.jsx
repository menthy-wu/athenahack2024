import { View, Text, Image, Pressable } from "react-native"
import { Icon } from "@rneui/themed";

export default function Location() {
        return (
            <View className=" w-screen h-full items-center">

                <View className="bg-white w-11/12 p-5 rounded-3xl">
                    <Text className="text-xl font-bold mb-2"> Nearest gas station... </Text>
                    
                    <View className=" p-2 border-2 border-athena-gray-200 rounded-3xl">
                        <Text className="text-2xl font-extrabold">1515 Berri Street</Text>
                        <View className="flex-row">
                    <View className=" flex-row m-1 bg-athena-light-purple py-2.5 px-4 rounded-xl items-center">
                        <Icon
                                name='clock-o'
                                size={20}
                            type='font-awesome'
                            color='#CC7AFF'/>
                        <Text className="ml-1 font-semibold text-athena-bright-purple">38 mins</Text>
                    </View>
                    <View className="flex-row m-1 bg-athena-gray-100 py-2.5 px-4 rounded-xl items-center">
                    <Icon
                                name='map-marked-alt'
                                size={20}
                            type='font-awesome-5'
                            color='#545454'/>
                        <Text className="ml-1 font-semibold">17 miles</Text>
                    </View>
                </View>
                        <Image source={require('@/public/map.png')} className="aspect-square w-72 h-72 rounded-[30px] my-3" />
                
                    </View>
                </View>
                <Pressable className="w-5/6 mt-5">
          {({ pressed }) => (
            <View className={`flex-row items-center w-full rounded-full p-2 justify-center bg-athena-bright-purple ${pressed && " opacity-50"}`}>
            <Icon
                name="play"
                type="font-awesome"
              size={25}
              color="#FFF"
            />
            <Text className=" text-white text-2xl font-semibold"> “Start Route” </Text>
              </View>
          )}
        </Pressable>

                {/*Emergency deteched*/}
                <View className="items-center flex-row bg-white w-11/12 p-5 rounded-3xl mt-3 border-[6px] border-athena-dark-purple">
                    <View className="bg-athena-bright-purple p-3 rounded-lg">
                        <Icon size={20}  color="#FFF" type="font-awesome-5" name="exclamation-triangle"/>
                    </View>
                    <Text className=" ml-4 text-2xl font-extrabold text-athena-gray-500">Emergency</Text>
                </View>


          </View>
      );
  }