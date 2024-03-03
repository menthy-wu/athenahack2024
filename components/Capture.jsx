//Source from https://github.com/chelseafarley/CameraAppTutorial/blob/main/App.js
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button, Image } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";

const GetImage = ({ cameraRef, photo, setPhoto }) => {};

export default function Capture() {
  const [photo, setPhoto] = useState();
  const [drawsy, setDrawsy] = useState(0);
  const [gesture, setGesture] = useState({ gesture: "none", score: 0 });
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();

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
    fetch("https://6bbf-207-151-53-33.ngrok-free.app/gesture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64 }),
    })
      .then((response) => response.json())
      .then((json) => {
        setGesture({ gesture: json.gesture, score: json.score });
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
    <SafeAreaView style="flex-1 justify-center items-center">
      <Text>{gesture.gesture}</Text>
      <Text>{gesture.score}</Text>
      <Camera type="front" className="w-screen h-3/4" ref={cameraRef} />
    </SafeAreaView>
  );
}
