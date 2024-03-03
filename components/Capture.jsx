//Source from https://github.com/chelseafarley/CameraAppTutorial/blob/main/App.js
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button, Image } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

export default function Capture({ setState }) {
  const [photo, setPhoto] = useState();
  const [drawsy, setDrawsy] = useState(0);
  const [play, setPlay] = useState(false);
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [sound, setSound] = useState();
  const enableAudio = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      shouldDuckAndroid: false,
    });
  };
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/music/HeatWaves.mp3")
    );
    setSound(sound);

    console.log("Play Sound");
    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);
  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const interval = setInterval(() => {
      takePic();
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (play) playSound();
    if (!play) sound?.setStatusAsync({ shouldPlay: false, positionMillis: 0 });
  }, [play]);
  let takePic = async () => {
    let options = {
      quality: 0.1,
      base64: true,
      exif: false,
      format: "jpg",
      height: 640,
      weight: 480,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    const base64 = await FileSystem.readAsStringAsync(newPhoto.uri, {
      encoding: "base64",
    });
    setPhoto(base64);
    fetch("https://6bbf-207-151-53-33.ngrok-free.app/drawsy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64 }),
    })
      .then((response) => response.json())
      .then((json) => {
        setDrawsy(json.drawsiness);
        if (json.drawsiness > 0.8) {
          setState(2);
          setPlay(true);
        }
        if (json.drawsiness < 0.2) {
          setState(0);
          setPlay(false);
        }
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  return (
    <SafeAreaView style="flex-1 justify-center items-center h-full">
      <Camera type="front" className="w-screen h-full" ref={cameraRef} />
    </SafeAreaView>
  );
}
