import Callsomeone from "./call/Callsomeone";
import WhoCall from "./call/WhoCall";
import { View } from "react-native";

export default function CallPage() {
  return (
    <View className="flex items-center justify-center w-full h-full">
      {/* <Selected /> */}
      <Callsomeone />
      <WhoCall />
    </View>
  );
}
