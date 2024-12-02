import { Text, View } from "react-native";
import UserInfor from "./UserInfo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const DetailBill = () => {
    return (
      <View className="p-3 bg-[rgba(255,248,245)] border-[1px] border-[#FFEBE4] mt-2">
        <UserInfor />
        <View className="bg-[#FFEBE4] w-[80%] mt-4 mb-6 h-[1px] m-auto"></View>

        <View className="flex-row gap-x-1 items-center w-100">
          <Text className="text-[rgba(0,0,0,0.5)] text-[12px]">18km</Text>
          <View className="flex-col gap-y-1">
            <View className="flex-row gap-x-2">
              <MaterialIcons name="adjust" color="#FF7F50" size={14} />
              <Text className="leading-[1.2] max-w-[172px]">
                08 Hà Văn Tính
              </Text>
            </View>
            <MaterialIcons name="south" color="#D9D9D9" size={14} />
            <View className="flex-row gap-x-2">
              <MaterialIcons name="location-pin" color="#27AE60" size={16} />
              <Text className="leading-[1.3] max-w-[172px]">
                Trường ĐH Bách Khoa
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-col gap-y-2 p-5 mt-4">
          <View className="flex-row justify-between">
            <Text className="font-semibold">Phí đặt xe</Text>
            <Text>100,000đ</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-semibold">Giảm giá</Text>
            <Text className="text-red-500">-0đ</Text>
          </View>
          <View className="bg-[#FFEBE4] w-full h-[1px] mb-1 mt-1"></View>
          <View className="flex-row justify-between">
            <Text className="font-semibold">Tổng tiền</Text>
            <Text className="text-[#27AE60] text-[15px] font-bold">
              100,000đ
            </Text>
          </View>
          <Text className="text-[12px] text-[#444] mt-2 text-right italic">
            Thời gian nhận đơn: 12:30 12-11-2024
          </Text>
          <Text className="text-[12px] text-[#444] text-right italic">
            Thời gian thanh toán: 12:30 12-11-2024
          </Text>
          <Text className="text-[12px] text-[#444] text-right italic">
            Hình thức thanh toán: Tiền mặt
          </Text>
          <Text className="text-[12px] text-[#444] text-right italic">
            Thời gian hoàn thành: 12:30 12-11-2024
          </Text>
        </View>
      </View>
    );
}

export default DetailBill;