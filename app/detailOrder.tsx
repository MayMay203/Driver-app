import images from "@/assets/images";
import DetailBill from "@/components/ui/DetailBill";
import FeedbackItem from "@/components/ui/Feedback/FeedbackItem";
import {ScrollView, Text, View } from "react-native";

const feedbackData = {
  ratableId: 1,
  name: "Hương Quỳnh",
  avatar: images.avatar,
  createAt: "20:00 12-11-2024",
  ratableValue: 5,
  content: "Tài xế nhận đơn nhanh, và vô cùng nhiệt tình ạ. Cảm ơn tài xế!",
};
const DetailOrder = () => {
  return (
    <ScrollView className="bg-white h-full">
      <View className="p-2 ">
        <Text className=" font-bold  text-[18px]">
          Hoá đơn
        </Text>
        <DetailBill/>
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
