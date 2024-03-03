import { Platform, StyleSheet } from "react-native";

import { Text, View, TouchableOpacity } from "react-native";
import Header from "@/components/Header";
import Capture from "@/components/Capture";
import { useState } from "react";

export default function DrivingScreen() {
  const [state, setState] = useState(0);

  return (
    <View className="flex items-center justify-center h-full bg-white">
      <View className="relative w-screen h-full">
        <Capture setState={setState} />
        <View className="absolute w-full items-center">
          {state === 1 && <Header title="Highly alert" alert="76" />}
          {state === 2 && <Header title="Highly drowsy" drowsy={true} />}
        </View>
      </View>
    </View>
  );
}
