import images from "@/assets/images";
import Order from "@/interface/Order";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Text, View } from "react-native";
import Button from "../Button";

const OrderItem: React.FC<{ data: Partial<Order> }> = ({ data }) => {
  const handleReceiveOrder = () => {};
  return (
    <View className="px-3 py-5 bg-[#fff] mt-4">
      <View className="flex-row gap-x-5">
        <View className="flex-row gap-x-3">
          <Image
            source={images.avatar}
            className="object-cover mt-1 w-[40px] h-[40px] rounded-full border-[#D34714] border-[1px]"
          ></Image>
          <View>
            <Text className="text-[#D34714] font-semibold mb-1 max-w-[100px] leading-[1.4]">
              {data.name}
            </Text>
            <View className="flex-row">
              <Text>{data.gender}</Text>
            </View>
          </View>
        </View>
    <View className="flex-col gap-y-1">
          <View className="flex-row gap-x-2">
            <MaterialIcons name="adjust" color="#FF7F50" size={14} />
            <Text className="leading-[1.2] max-w-[172px]">
              {data.startingLocation}
            </Text>
          </View>
          <MaterialIcons name="south" color="#D9D9D9" size={14} />
          <View className="flex-row gap-x-2">
            <MaterialIcons name="location-pin" color="#27AE60" size={16} />
            <Text className="leading-[1.3] max-w-[172px]">
              {data.destination}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-col justify-between items-center mt-4">
        <View className="flex-row gap-x-1 items-center mb-6 justify-center">
          {/* <MaterialIcons name="money" color="#FFC700" size={16} /> */}
          <Text>Tổng tiền: </Text>
          <Text className="text-[#27AE60] font-semibold italic">{data.total} VNĐ</Text>
        </View>
        <Button
          type="primary"
          title="Nhận đơn"
          onPress={handleReceiveOrder}
        ></Button>
      </View>
    </View>
  );
};

export default OrderItem;
