//Source from https://github.com/chelseafarley/CameraAppTutorial/blob/main/App.js
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button, Image } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
const GetImage = ({ cameraRef }) => {
  const [photo, setPhoto] = useState();

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
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    //setPhotos([...photo,    newPhoto]);
    setPhoto(newPhoto);
    console.log("take picture");

    // assume sent to backend, gesture is returned by backend
    const gesture = 0;
    if (gesture == 0) {
      // get lat long
      const lat = 34.022415;
      const long = -118.28553;
      const apikey = process.env.GOOGLE_MAPS_API_KEY;
      // Assuming you have constructed the URL as shown previously
      const fetchAddress = (lat, long) => {
        if (lat == null || long == null) {
          console.log("Latitude or longitude is not provided");
          return;
        }
      
        const apikey = process.env.GOOGLE_MAPS_API_KEY; // Ensure your environment variable is correctly set
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apikey}`;
      
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json(); // Convert the response to a JavaScript object
          })
          .then((data) => {
            if (data.results && data.results.length > 0) {
              console.log(data.results[0].formatted_address); // Log the formatted address
            } else {
              console.log("No address found for the given coordinates");
            }
          })
          .catch((error) => {
            console.error("There has been a problem with your fetch operation:", error);
          });
      };
  };
};

export default function Capture() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

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
      <Camera className="w-screen h-screen" ref={cameraRef}>
        <GetImage cameraRef={cameraRef} />
      </Camera>
    </SafeAreaView>
  );
}
