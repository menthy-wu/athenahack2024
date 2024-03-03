import { Pressable } from "react-native";
import Header  from "@/components/Header";
import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "@/components/useColorScheme";
export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  return (

      <ImageBackground className="flex-1 w-screen h-screen items-center pt-[30%]" source={require('@/public/background.png')} >
      <Header title="USC Drive party" time="38" mile="18"/>
      <Link href="/driving" asChild>
        <Pressable className="w-5/6 mt-5">
          {({ pressed }) => (
            <View className={`flex-row items-center w-full rounded-full p-2 justify-center bg-athena-bright-purple ${pressed && " opacity-50"}`}>
            <FontAwesome
              name="play"
              size={25}
              color="#FFF"
            />
            <Text className=" text-white text-2xl font-semibold"> Start Trip </Text>
              </View>
          )}
        </Pressable>
        </Link>
    </ImageBackground>
  );
}
