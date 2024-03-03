import { Pressable } from "react-native";
import Header from "@/components/Header";
import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { DataContext } from "../../components/dataContext";
import { useContext } from "react";
export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const { data, setData } = useContext(DataContext);
  return (
    <ImageBackground
      className="flex-1 w-screen h-screen items-center pt-[30%]"
      source={require("@/public/background.png")}
    >
      <Header title="USC Drive party" time="38" mile="18" />
      <Link href="/driving" asChild>
        <Pressable
          className="w-5/6 mt-5"
          onPress={() => {
            setData({ ...data, start: new Date() });
          }}
        >
          <View
            className={`flex-row items-center w-full rounded-full p-3 justify-center bg-athena-bright-purple `}
          >
            <FontAwesome
              name="play"
              size={25}
              color="#FFF"
            />
            <Text className=" text-white text-2xl font-semibold">
              “Start Route”
            </Text>
          </View>
        </Pressable>
      </Link>
    </ImageBackground>
  );
}
