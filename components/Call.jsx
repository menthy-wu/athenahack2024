import { View, Text, Image } from "react-native"
import { Icon } from "@rneui/themed";
import ContactList from "../components/ContactList"

export default function Call() {
        return (
            <View className=" w-screen h-full items-center">

                <View className="w-11/12 bg-white py-5 px-8 rounded-2xl">
                    <View className="flex-row w-full justify-between">
                    <Text className="text-xl font-extrabold text-athena-gray-500">Contact selected</Text>
                        <Icon type="font-awesome-5" name="check-circle" color="#CC7AFF" />
                    </View>
                    <View className="p-3 border-[6px] border-athena-bright-purple rounded-2xl items-center my-4">
                        <View className="rounded-full p-2 bg-athena-gray-100">
                            <Image source={require('@/public/image.png')} className="w-40 h-40 rounded-full" />
                         </View>
                        <Text className="text-2xl font-extrabold">Menthy Wu</Text>
                        <Text className="font-bold text-athena-gray-500" >800 812 960</Text>
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

                {/*Call deteched*/}
                <View className="bg-white w-11/12 flex-row justify-between rounded-full px-3 py-2">
                    <Text>03.03.24</Text>
                    <View className="flex-row">
                        <Icon type="font-awesome-5" color="#B080FF" size={15} name="broadcast-tower"/>
                        <Text className="ml-1 text-athena-dark-purple font-extrabold">live</Text>
                    </View> 
                </View>
                <View className="items-center flex-row bg-white w-11/12 p-5 rounded-3xl mt-3 border-[6px] border-athena-dark-purple">
                        <Icon size={40}  color="#B080FF" type="font-awesome-5" name="phone-square-alt"/>
                        <Text className=" ml-4 text-2xl font-extrabold text-athena-gray-500">Call Someone...</Text>
                </View>

                {/*Choose person*/}
                <View className="bg-white p-4 rounded-xl w-11/12">
                    <View className="flex-row">
                        <View className="bg-athena-dark-purple px-2 py-1.5 rounded-lg ">
                            <Icon size={20} color="#FFF" type="font-awesome-5" name="microphone" />
                            </View>
                            <Text className=" ml-2 font-extrabold text-lg">Who are you contacting?</Text>
                    </View>
                    <View className=" border-athena-dark-purple border-4 rounded-3xl p-3 mt-2">
                        <Text className=" text-lg font-bold">Tim...</Text>
                    </View>
                </View>

               {/*ContactList*/}
                <ContactList />


          </View>
      );
  }