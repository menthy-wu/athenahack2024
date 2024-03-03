import React, { useState, useEffect } from "react";
import { Pressable, View, Text, Button, Modal } from "react-native";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
const LocationRequestModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [locationPermissionInfo, setLocationPermissionInfo] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        setModalVisible(true);
      }
    })();
  }, []);

  const handleLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      // Permission granted, you can get the location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    } else {
      // Permission denied
      console.log("Location permission not granted");
    }
    setModalVisible(false);
    setLocationPermissionInfo({ status });
  };

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              elevation: 5,
            }}
          >
            <Text style={{ marginBottom: 20, textAlign: "center" }}>
              Allow location access?
            </Text>

            <Pressable onPress={handleLocationPermission}>
              <Text>Grant Access</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>
        <Text>Latitude: {location}</Text>
      </Text>
    </View>
  );
};

export default LocationRequestModal;