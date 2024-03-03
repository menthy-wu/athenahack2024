import { Text, View } from "react-native";
import ContactList from "../../components/ContactList"
export default function Contact() {
  return (
    <View className="flex items-center justify-start h-full bg-black/75">
      <ContactList />
    </View>
  );
}
