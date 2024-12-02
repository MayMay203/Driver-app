import UserInfor from "@/components/ui/UserInfo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

const ReceiveOrder = () => {
  const [status, setStatus] = useState("picked");
  const [startLocation, setStartLocation] =
    useState<Location.LocationObject | null>(null);
  const mapRef = useRef<MapView>(null);

  console.log(startLocation);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Quyền truy cập vị trí bị từ chối!");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      if (location) setStartLocation(location);
    }
    getCurrentLocation();
  }, []);

  const [location, setLocation] = useState({
    customerLocation: {
      latitude: 16.073875, // Trường Đại học Bách Khoa Đà Nẵng
      longitude: 108.149697,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    arrivalLocation: {
      latitude: 16.070525, // Trường Đại học Duy Tân
      longitude: 108.220739,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  });
  const [markers, setMarkers] = useState([
    {
      id: 1,
      title: "Vị trí hiện tại",
      description: "Điểm bắt đầu",
      latlng: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
    },
  ]);

  useEffect(() => {
    if (startLocation) {
      if (status === "picked") {
        // Vị trí hiện tại và điểm đón khách
        setMarkers([
          {
            id: 1,
            title: "Vị trí hiện tại",
            description: "Điểm bắt đầu",
            latlng: {
              latitude: startLocation.coords.latitude,
              longitude: startLocation.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            },
          },
          {
            id: 2,
            title: "08 Hà Văn Tính",
            description: "Điểm đón khách",
            latlng: location.customerLocation,
          },
        ]);
      } else if (status === "completed") {
        // Điểm đón khách và điểm đến
        setMarkers([
          {
            id: 1,
            title: "08 Hà Văn Tính",
            description: "Điểm đón khách",
            latlng: location.customerLocation,
          },
          {
            id: 2,
            title: "Công viên 29/3",
            description: "Điểm đến",
            latlng: location.arrivalLocation,
          },
        ]);
      }
    }
  }, [status, startLocation]);

  const handleChangeStatus = () => {
    if (status === "picked") {
      if (mapRef.current && status === "picked") {
        mapRef.current.animateToRegion(location.customerLocation, 1000);
      }
      setStatus("completed");
    }
  };

  return (
    <View className="h-full bg-white flex-col justify-end">
      <View className="flex-1">
        {startLocation && (
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={{
              latitude: startLocation.coords.latitude,
              longitude: startLocation.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                coordinate={marker?.latlng}
                title={marker.title}
                description={marker.description}
              >
                <MaterialIcons
                  name={marker.id === 1 ? "adjust" : "location-on"}
                  size={marker.id === 1 ? 32 : 36}
                  color={marker.id === 1 ? "green" : "red"}
                />
              </Marker>
            ))}
            <Polyline
              coordinates={[markers[0]?.latlng, markers[1]?.latlng]}
              strokeColor="#0000FF"
              strokeWidth={3}
            />
          </MapView>
        )}
      </View>
      <View className="px-3 py-2 border-[1px] border-[#FFF6F3]">
        <UserInfor />
        <View className="flex-row justify-between mt-2">
          <View className="flex-col">
            <View className="flex-row gap-x-2">
              <MaterialIcons name="adjust" color="#FF7F50" size={12} />
              <Text className="leading-[1.2] max-w-[172px] text-[12px]">
                08 Hà Văn Tính
              </Text>
            </View>
            <MaterialIcons name="south" color="#D9D9D9" size={10} />
            <View className="flex-row gap-x-2">
              <MaterialIcons name="location-pin" color="#27AE60" size={12} />
              <Text className="leading-[1.3] max-w-[172px] text-[12px]">
                Trường ĐH Bách Khoa
              </Text>
            </View>
          </View>
          <View className="flex-col items-end">
            <Text className="text-[12px]">Tổng tiền: 100.000 VNĐ</Text>
            <Text className="text-[#FF0000] font-semibold italic text-[10px] mt-1">
              Chưa thanh toán
            </Text>
            <TouchableOpacity
              onPress={handleChangeStatus}
              className="mt-3"
              style={[
                styles.button,
                // status === "waiting" && styles.waiting,
                status === "picked" && styles.picked,
                status === "completed" && styles.completed,
              ]}
            >
              <Text className="text-[12px] text-white w-full text-center">
                {status === "picked" ? "Đã đón khách" : "Hoàn thành"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    borderRadius: 4,
    fontSize: 12,
    padding: 4,
  },
  waiting: {
    backgroundColor: "#F6C000",
  },
  picked: {
    backgroundColor: "#FF7F50",
  },
  completed: {
    backgroundColor: "#27AE60",
  },
});
export default ReceiveOrder;
