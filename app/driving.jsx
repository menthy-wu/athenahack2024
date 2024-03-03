import { Platform, StyleSheet } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import Header from "@/components/Header";
import Capture from "@/components/Capture";
import { useState } from "react";

export default function DrivingScreen() {
  const [state, setState] = useState(0);

  const onPress=()=>{setState(state === 2 ? 0 : state + 1);}

  return (
    <View className="flex items-center justify-center h-full bg-white">
      <View className="relative w-screen h-full">
        <Capture />
        <View className="w-screen h-full bg-black opacity-70 absolute" />
        <View className="absolute w-full items-center">
          {state===1 && <Header title="Highly alert" alert="76" />}
          {state === 2 && <Header title="Highly drowsy" drowsy={true} />}
          
          <TouchableOpacity onPress={onPress} className="w-fit p-2 rounded-full mt-5 bg-white">
            <Text>Switch Use Case</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};
