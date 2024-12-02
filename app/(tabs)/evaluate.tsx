import images from "@/assets/images";
import FeedbackList from "@/components/ui/Feedback/FeedbackList";
import Header from "@/components/ui/Header";
import Feedback from "@/interface/Feedback";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

const feedbackList: Feedback[] = [
  {
    ratableId: 1,
    name: "John Doe",
    avatar: images.avatar,
    createAt: "20:00 12-11-2024",
    ratableValue: 5,
    content: "Great experience!",
  },
  {
    ratableId: 2,
    name: "Jane Smith",
    avatar: images.avatar,
    createAt: "20:00 12-11-2024",
    ratableValue: 4,
    content: "Good service but can improve.",
  },
  {
    ratableId: 3,
    name: "Alice Johnson",
    avatar: images.avatar,
    createAt: "20:00 12-11-2024",
    ratableValue: 5,
    content: "Exceptional quality and support!",
  },
  {
    ratableId: 4,
    name: "Bob Brown",
    avatar: images.avatar,
    createAt: "20:00 12-11-2024",
    ratableValue: 3,
    content: "Average experience.",
  },
  {
    ratableId: 5,
    name: "Charlie Wilson",
    avatar: images.avatar,
    createAt: "20:00 12-11-2024",
    ratableValue: 5,
    content: "Highly recommended!",
  },
];
const Evaluate = () => {
  const [star, setStar] = useState(5);
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }} className="pb-4">
        <Header />
        <View className="px-2">
          <Text className="text-[18px] mt-[12px] mb-[10px] font-semibold">
            ĐÁNH GIÁ
          </Text>
          <View>
            <View className="flex-row items-center mt-6 justify-between">
              <Text className="text-[16px]">Tất cả</Text>
              {
                <TouchableOpacity
                  className="flex-row gap-x-2 items-center p-2 px-4 rounded-[999px] border-[#FF7F50] border-[1px]"
                >
                  <MaterialIcons color="#FF7F50" name="filter" />
                  <Text className="text-[#FF7F50]">Bộ lọc</Text>
                </TouchableOpacity>
              }
            </View>
            <View className="flex-row w-full gap-x-3 justify-center mt-8 mb-6">
              {[5, 4, 3, 2, 1].map((rating) => (
                <TouchableOpacity
                  key={rating}
                  className="flex-row p-2 px-4 rounded-[999px] border-[#FFEBE4] border-[1px] min-w-1/3 justify-center items-center gap-x-1"
                  onPress={() => setStar(rating)}
                  style={
                    star === rating
                      ? {
                          backgroundColor: "rgba(255,127,80,0.1)",
                        }
                      : {}
                  }
                >
                  <Text
                    className="text-[rgb(255,127,80)] font-medium text-[16px]"
                    style={star === rating ? { color: "#FF723E" } : {}}
                  >
                    {rating}
                  </Text>
                  <MaterialIcons name="star" color="#ffc700" size={18} />
                </TouchableOpacity>
              ))}
            </View>
            <FeedbackList dataList={feedbackList} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Evaluate;
