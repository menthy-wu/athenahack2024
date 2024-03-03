import { Text, View } from "react-native";
import SummaryElement from "@/components/SummaryElement";
import LocationModal from "@/components/LocationModal";
export default function SettingScreen() {
  return (
    <View className="flex items-center justify-center h-full bg-white p-5">
      <LocationModal/>
      <Text>Setting</Text>
      <SummaryElement summarytitle="Called mom 2 times" />
    </View>
  );
}
