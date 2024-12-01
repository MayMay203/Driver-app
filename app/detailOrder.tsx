import images from "@/assets/images";
import FeedbackItem from "@/components/ui/Feedback/FeedbackItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const feedbackData = {
  ratableId: 1,
  name: "Hương Quỳnh",
  avatar: images.avatar,
  createAt: "20:00 12-11-2024",
  ratableValue: 5,
  content: "Tài xế nhận đơn nhanh, và vô cùng nhiệt tình ạ. Cảm ơn tài xế!",
};
const DetailOrder = () => {
  const router = useRouter()
  return (
    <ScrollView className="bg-white h-full">
      <View className="p-2 ">
        <Text className=" font-bold  text-[18px]">
          Hoá đơn
        </Text>
        <View className="p-3 bg-[rgba(255,248,245)] border-[1px] border-[#FFEBE4] mt-2">
          <View className="flex-row gap-x-4 items-end">
            <View className="flex-row gap-x-2">
              <View className="flex-row gap-x-3">
                <Image
                  source={images.avatar}
                  className="object-cover mt-1 w-[40px] h-[40px] rounded-full border-[#D34714] border-[1px]"
                ></Image>
                <View>
                  <Text className="text-[#D34714] font-semibold mb-1 max-w-[100px] leading-[1.4]">
                    Bùi Thị Hoa
                  </Text>
                  <View className="flex-row">
                    <Text>0948586868</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="flex-row gap-x-3 justify-between items-center flex-1">
              <View className="flex-row items-center gap-x-1">
                <MaterialIcons name="female" color="#2474E5" size={19} />
                <Text>Nữ</Text>
              </View>
              <TouchableOpacity onPress={() => router.push("/message")}>
                <Text className="text-[#FF7F50] italic px-2 py-1">
                  Nhắn tin
                </Text>
              </TouchableOpacity>
            </View>
          </View>

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
        <View className="mt-4">
          <Text className="font-bold  text-[18px]">
            Đánh giá
          </Text>
          <FeedbackItem
            className="p-4 bg-[rgba(255,248,245)]"
            data={feedbackData}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailOrder;
