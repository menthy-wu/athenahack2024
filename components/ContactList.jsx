import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Contacts from 'expo-contacts';
// import call from 'react-native-phone-call';
import ContactCard from './ContactCard';
// import { CgSandClock } from "react-icons/cg";
import { Icon } from '@rneui/themed';
// import SmsScreen from "@/components/SmsSend"
// import Record from "@/components/Record"

export default function ContactList({contacts, setContacts}) {
// const [contacts, setContacts] = useState(null);
// const [selectedNumber, setSelectedNumber] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          setContacts(data);
          console.log(data[0]);
        //   console.log(data[0].firstName);
        //   console.log(data[0].phoneNumbers[0].number);
        }
      }
    })();
  }, []);


  const topContacts = contacts?.slice(0,3);

  return (
    <SafeAreaView className="w-11/12 bg-white border-2 border-black rounded-3xl flex justify-center items-center">
          <View className="w-10/12 flex flex-row bg-athena-gray-100 rounded-full p-2 mt-4 justify-center items-center">
          <Icon
              name="hourglass-half"
              size={17}
              type="font-awesome"
              color="#545454"
          />
        <Text className="text-athena-gray-500 text-center text-xl font-bold px-2">Going through Contacts ...</Text>
      </View>
    <View className="flex flex-col w-10/12 my-4">
      {topContacts?.map((person, index) => (
            <View key={index} className="flex justify-center bg-white py-3">
              {/* <Text>{person.firstName}</Text> */}
            {/* {console.log("person.phoneNumbers")} */}
              {person.phoneNumbers?.map((phone, phoneIndex) => (
                <View>
                  <ContactCard key={phoneIndex} name={person.firstName} number={phone.number}/>
              </View> 
              ))}
              
            </View>
            
          ))}
    </View>
    <View className="border-athena-gray-200 rounded-3xl w-8/12 border-4 p-2 my-4">
    <Icon
              name="microphone"
              size={25}
              type="font-awesome"
              color="#545454"
          />
    </View>
    {/* <Record /> */}
    
    </SafeAreaView>
  );
}

                {/* <TouchableOpacity key={phoneIndex} activeOpacity={0.7}
                className="p-2 rounded-lg mt-4"
                onPress={() => {
                    // setSelectedNumber(phone.number);
                    const args = {
                        number: phone.number,
                        prompt: true,
                      };
                      call(args).catch(console.error);}}>
                    <Text className="text-xl underline" >{phone.number}</Text>
                </TouchableOpacity> */}
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