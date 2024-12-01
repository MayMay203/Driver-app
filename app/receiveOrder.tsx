import images from "@/assets/images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const ReceiveOrder = () => {
  const [status, setStatus] = useState("waiting");
  const router = useRouter();
  const mapRef = useRef<MapView>(null);

  const [location, setLocation] = useState({
    currentLocation: {
      latitude: 16.074518, // ĐH Bách Khoa Đà Nẵng
      longitude: 108.149113,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    customerLocation: {
      latitude: 16.043055, // 08 Hà Văn Tính, Hòa Khánh Nam
      longitude: 108.208678,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    arrivalLocation: {
      latitude: 16.060399, // Công viên 29/3
      longitude: 108.202134,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  });
  const [markers, setMarkers] = useState([
    {
      id: 1,
      title: "Trường ĐH Bách Khoa",
      description: "Vị trí xuất phát",
      latlng: location.currentLocation,
    },
    {
      id: 2,
      title: "08 Hà Văn Tính",
      description: "Điểm đón khách",
      latlng: location.customerLocation,
    },
  ]);

  useEffect(() => {
    if (status === "picked") {
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
  }, [status]);

  const handleChangeStatus = () => {
    setStatus((prev) =>
      prev === "waiting"
        ? "picked"
        : prev === "picked"
        ? "completed"
        : "completed"
    );
    if (mapRef.current && status === "waiting") {
      mapRef.current.animateToRegion(location.customerLocation, 1000);
    }
  };

  return (
    <View className="h-full bg-white">
      <View className="h-[75%]">
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={location.currentLocation}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <MaterialIcons
                name={marker.id === 1 ? "adjust" : "location-on"}
                size={marker.id === 1 ? 30 : 30}
                color={marker.id === 1 ? "green" : "red"}
              />
            </Marker>
          ))}
        </MapView>
      </View>
      <View className="px-3 py-2 border-[1px] border-[#FFF6F3] h-[25%]">
        <View className="flex-row gap-x-4 items-end">
          <View className="flex-row gap-x-2">
            <View className="flex-row gap-x-3">
              <Image
                source={images.avatar}
                className="object-cover mt-1 w-[40px] h-[40px] rounded-full border-[#D34714] border-[1px]"
              ></Image>
              <View>
                <Text className="text-[#D34714] font-semibold mb-1 max-w-[100px] leading-[1.4] text-[12px]">
                  Bùi Thị Hoa
                </Text>
                <View className="flex-row">
                  <Text className="text-[13px]">0948586868</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row gap-x-3 justify-between items-center flex-1">
            <View className="flex-row items-center gap-x-1">
              <MaterialIcons name="female" color="#2474E5" size={19} />
              <Text className="text-[12px]">Nữ</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/message")}>
              <Text className="text-[#FF7F50] italic px-2 py-1">Nhắn tin</Text>
            </TouchableOpacity>
          </View>
        </View>
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
            <Text className="text-red italic text-[10px] mt-1">
              Chưa thanh toán
            </Text>
            <TouchableOpacity
              onPress={handleChangeStatus}
              className="mt-3"
              style={[
                styles.button,
                status === "waiting" && styles.waiting,
                status === "picked" && styles.picked,
                status === "completed" && styles.completed,
              ]}
            >
              <Text className="text-[12px] text-white w-full text-center">
                {status === "waiting"
                  ? "Đón khách"
                  : status === "picked"
                  ? "Đã đón khách"
                  : "Hoàn thành"}
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
