import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function PlayMusic() {
  const [sound, setSound] = useState();
  const enableAudio = async () => {
    await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    staysActiveInBackground: false,
    interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    shouldDuckAndroid: false,
    })
    
  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/music/HeatWaves.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View className="w-full bg-green-200">
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
