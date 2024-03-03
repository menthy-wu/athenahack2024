import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Contacts from 'expo-contacts';
import call from 'react-native-phone-call';
// import SmsScreen from "@/components/SmsSend"

export default function ContactList() {
const [contacts, setContacts] = useState(null);
// const [selectedNumber, setSelectedNumber] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          setContacts(data);
        //   console.log(data[0]);
        //   console.log(data[0].firstName);
        //   console.log(data[0].phoneNumbers[0].number);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView className="w-full bg-white h-full">
    <View classNmae="flex flex-col">
      {contacts?.map((person, index) => (
            <View key={index} className="flex justify-center py-6">
              <Text>{person.firstName}</Text>
            {/* {console.log("person.phoneNumbers")} */}
              {person.phoneNumbers?.map((phone, phoneIndex) => (
                <View>
                <TouchableOpacity key={phoneIndex} activeOpacity={0.7}
                className="p-2 rounded-lg mt-4"
                onPress={() => {
                    // setSelectedNumber(phone.number);
                    const args = {
                        number: phone.number,
                        prompt: true,
                      };
                      call(args).catch(console.error);}}>
                    <Text className="text-xl underline" >{phone.number}</Text>
                </TouchableOpacity>
                {/* For Messaging */}
                {/* <TouchableOpacity activeOpacity={0.7}
                className="mt-2"
                onPress={() => {
                    setSelectedNumber(phone.number)
                    console.log(selectedNumber);
                <SmsScreen number = {selectedNumber} message="hardcodded testing message"/>
                }}>
                <Text className="underline">Send Message</Text>
              </TouchableOpacity> */}
              </View> 
              ))}
              
            </View>
            
          ))}
    </View>
    </SafeAreaView>
  );
}