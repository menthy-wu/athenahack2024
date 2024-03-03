import * as React from 'react';
import { View, Button, Text } from 'react-native';
import * as SMS from 'expo-sms';

export default function SmsScreen({number, message}) {
  console.log("number");
  console.log(number);
    // define three state variables
    // const [smsServiceAvailable, setSmsServiceAvailable] = React.useState(false);
    // const [phoneNumber, setPhoneNumber] = React.useState('');
    // const [message, setMessage] = React.useState('');
  
    // trigger the handler method as soon as the function component
    // SmsScreen is mounted
    // React.useEffect(() => {
    //   checkIfServiceAvailable();
    // }, []);
  
    // define a handler method to check if SMS service is available or not
  
    // const checkIfServiceAvailable = async () => {
    //   const isAvailable = await SMS.isAvailableAsync();
    //   if (isAvailable) {
    //     setSmsServiceAvailable(true);
    //   }
    // };
      // define a handler method to compose an SMS message
  const onComposeSms = async () => {
    if ( number && message) {
      await SMS.sendSMSAsync(phoneNumber.toString(), message);
    }
  };
  
    return (
        <View className="flex w-full">
          hi we're here
        <Button
          title='Send SMS'
          onPress={onComposeSms}
        //   disabled={!smsServiceAvailable}
        />
      </View>
      
    );
  }