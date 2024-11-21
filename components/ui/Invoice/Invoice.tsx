import images from "@/assets/images";
import Order from "@/interface/Order";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

const HistoryItem: React.FC<{ data: Partial<Order> }> = ({ data }) => {
  return (
    <Link
      href="/detailOrder"
      className="px-3 py-5 bg-[#fff] mt-4 border-[1px] border-[#FFEBE4]"
    >
      <View>
        <View className="flex-row gap-x-3 mb-4">
          <Image
            source={images.avatar}
            className="object-cover mt-1 w-[40px] h-[40px] rounded-full border-[#D34714] border-[1px]"
          ></Image>
          <View>
            <Text className="text-[#D34714] font-semibold mb-1 max-w-[100%] leading-[1.4]">
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
            <Text className="leading-[1.2] w-[100%]">
              {data.startingLocation}
            </Text>
          </View>
          <MaterialIcons name="south" color="#D9D9D9" size={14} />
          <View className="flex-row gap-x-2">
            <MaterialIcons name="location-pin" color="#27AE60" size={16} />
            <Text className="leading-[1.3] w-[100%]">{data.destination}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row gap-x-1 items-center mb-2 p-2 pt-3">
        <Text>Tổng tiền: </Text>
        <Text className="text-[#27AE60] font-semibold italic">
          {data.total} VNĐ
        </Text>
      </View>
      <View className="flex-row gap-x-1 p-2 pt-[0px]">
        <Text className="w-[78px]">Thời gian đi:</Text>
        <Text className="text-[#FF7F50] italic font-semibold">
          {data.createAt}
        </Text>
      </View>
    </Link>
  );
};

export default HistoryItem;
