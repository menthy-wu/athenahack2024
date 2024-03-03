import { Platform, StyleSheet } from "react-native";

import { Text, View, TouchableOpacity } from "react-native";
import Header from "@/components/Header";
import Capture from "@/components/Capture";
import { useState } from "react";
import CallPage from "../components/CallPage";
import Live from "../components/Live";
import Contact from "../components/Contact";

export default function DrivingScreen() {
  const [state, setState] = useState(0);
  const [gesture, setGesture] = useState("none");

  return (
    <View className="flex items-center justify-center h-full bg-white">
      <View className="relative w-screen h-full">
        <Capture
          setState={setState}
          setGesture={setGesture}
          gesture={gesture}
        />
        <View className="absolute w-full items-center">
          <Live />
          {gesture == "call" && <Contact />}
          {gesture == "palm" && setGesture("none")}
          {gesture == "message" && <Text>message</Text>}
          {gesture == "none" && state === 1 && (
            <Header title="Highly alert" alert="76" />
          )}
          {gesture === "none" && state === 2 && (
            <Header title="Highly drowsy" drowsy={true} />
          )}
        </View>
      </View>
    </View>
  );
}
