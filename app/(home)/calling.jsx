import { Text, View } from "react-native";
import ContactList from "../../components/ContactList"
import Call from "../../components/Call";
export default function Calling() {
  return (
    <View className="flex items-center justify-start h-full bg-black/75">
        <Call/>
    </View>
  );
}
