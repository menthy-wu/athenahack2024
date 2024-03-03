import { View, Text, Image, Pressable } from "react-native";
import { Icon } from "@rneui/themed";

export default function Message() {
        return (
            <View className=" w-screen h-full items-center">
                {/*Call deteched*/}
                <View className="items-center flex-row bg-white w-11/12 p-5 rounded-3xl mt-3 border-[6px] border-athena-blue">
                        <Icon size={40}  color="#30C1FF" type="font-awesome-5" name="comment-dots"/>
                        <Text className=" ml-4 text-2xl font-extrabold text-athena-gray-500">Send a message...</Text>
                </View>


                {/*Confirm Messages*/}
                <View className="w-11/12 bg-white py-5 px-8 rounded-2xl">
                <View className="flex-row w-full justify-between">
                    <Text className="text-xl font-extrabold text-athena-gray-500">Final Messages</Text>
                        <Icon type="font-awesome-5" name="check-circle" color="#CC7AFF" />
                    </View>
                    <View className="flex-row p-1 border-4 border-athena-gray-100 rounded-2xl items-center my-4">
                        <View className="rounded-2xl p-1 bg-athena-gray-100">
                            <Image source={require('@/public/image.png')} className="w-12 h-12 rounded-2xl" />
                        </View>
                        <View className="ml-3">
                        <Text className="font-bold text-athena-gray-500" >sending to...</Text>
                        <Text className="text-lg font-extrabold">Menthy Wu</Text>
                        </View>
                    </View>

                    <View className="p-4 bg-athena-gray-100 rounded-2xl mb-4 h-32">
                        <Text className="text-base font-semibold">“Hey I want to let you know that our presentation went well! I’m heading back right now to tell you about it” </Text>
                    </View>
        <Pressable className=" mt-3 w-full">
          {({ pressed }) => (
            <View className={`flex-row items-center w-full rounded-full p-3 justify-center bg-athena-bright-purple ${pressed && " opacity-50"}`}>
            <Icon
            type="font-awesome-5"
              name="microphone"
              size={20}
              color="#FFF"
            />
            <Text className=" text-white text-xl font-semibold"> Send </Text>
            </View>
          )}
        </Pressable>

        </View>

                {/*Live Messages*/}
                <View className="w-11/12 bg-white py-5 px-8 rounded-2xl">
                    <Text className="text-xl font-extrabold text-athena-gray-500">What is your message?</Text>
                    <View className="flex-row p-1 border-4 border-athena-gray-100 rounded-2xl items-center my-4">
                        <View className="rounded-2xl p-1 bg-athena-gray-100">
                            <Image source={require('@/public/image.png')} className="w-12 h-12 rounded-2xl" />
                        </View>
                        <View className="ml-3">
                        <Text className="font-bold text-athena-gray-500" >sending to...</Text>
                        <Text className="text-lg font-extrabold">Menthy Wu</Text>
                        </View>
                    </View>

                    <View className="p-3 border-[4px] border-athena-bright-purple rounded-2xl mb-4 h-32">
                        <Text className="text-lg font-semibold">Hey I want to let you know that... </Text>
                    </View>

                    <View className="w-full p-2.5 bg-athena-gray-200 flex-row justify-center items-center rounded-full">
                        <Icon
                            name="hourglass-half"
                            size={17}
                            type="font-awesome"
                            color="#545454"
                        />
                        <Text className=" font-bold text-athena-gray-500 ml-2">processing...</Text>
                    </View>
                </View>

          </View>
      );
  }