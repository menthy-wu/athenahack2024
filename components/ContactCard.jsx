import { View, Text } from "react-native"

export default function ContactCard({name, number}){
    return(
        <View className="bg-white w-full flex justify-center items-center">
            <View className="w-full bg-athena-gray-100 rounded-3xl p-3 flex flex-row justify-start items-center">
                <View className="bg-black/75 rounded-md w-2/12 h-5/6 mx-4">
                </View>
                <View className="">
                <Text className="text-black font-bold text-2xl">
                    {name}
                </Text>
                <Text className="text-black/75 text-lg font-semibold">
                    {number}
                </Text>
                </View>
                
                
            </View>

        </View>

    );
}