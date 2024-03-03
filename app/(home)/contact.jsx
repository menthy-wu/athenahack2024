import { Text, View } from "react-native";
import { useState, useEffect } from 'react';
import ContactList from "../../components/ContactList"
import Record from "../../components/Record"
import call from 'react-native-phone-call';
export default function Contact() {
    const [contacts, setContacts] = useState(null);
    const [recording, setRecording] = useState(null);

    useEffect(() => {
        if (recording && contacts) {
            const contactsStr = JSON.stringify(contacts);
            
            fetch("https://6bbf-207-151-53-33.ngrok-free.app/call", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ audio: recording, contacts: contactsStr }),
            })
            .then(response => response.json())
            .then(data => {
                const args = {
                    number: data["phone number"], 
                    prompt: true,
                };
                call(args).catch(console.error);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [recording, contacts]);
  return (
    <View className="flex items-center justify-start h-full bg-black/75">
      <ContactList contacts={contacts} setContacts={setContacts}/>
      <Record recording={recording} setRecording={setRecording}/>
    </View>
  );
  
}
