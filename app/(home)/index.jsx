import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Landing Screen</Text>
      <Link href="/driving" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="play"
              size={25}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
}