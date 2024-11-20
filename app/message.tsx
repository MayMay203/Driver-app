import MessageList from "@/components/ui/Message/MessageList";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const messages = [
  {
    id: "1",
    content: "Xin chào! Đây là tin nhắn đầu tiên của bạn.",
    senderName: "Nguyễn Văn A",
    date: "20-11-2024",
    time: "12:11",
    isSeen: false,
  },
  {
    id: "2",
    content: "Bạn: Bạn đã kiểm tra thông báo mới chưa?",
    senderName: "Trần Thị B",
    date: "20-11-2024",
    time: "12:09",
    isSeen: true,
  },
  {
    id: "3",
    content: "Chúng ta có cuộc họp lúc 10 giờ sáng nay.",
    senderName: "Phạm Văn C",
    date: "21-11-2024",
    time: "12:14",
    isSeen: false,
  },
  {
    id: "4",
    content: "Đừng quên gửi báo cáo trước 5 giờ chiều nhé.",
    senderName: "Lê Thị D",
    date: "20-11-2024",
    time: "12:11",
    isSeen: true,
  },
];
function Message() {
  const [type, setType] = useState("all");
  return (
    <View className="h-full bg-white p-[4px]">
      <View className="flex-row gap-x-2 justify-between p-2 items-center">
        <Text className="font-bold text-[#000] text-[20px]">Tin nhắn</Text>
        <View className="flex-row rounded-full bg-[rgba(0,0,0,0.06)] items-center h-[38px] px-3">
          <TextInput
            className="w-[180px] h-full"
            placeholder="Nhập tên"
          ></TextInput>
          <MaterialIcons name="search" size={20} />
        </View>
      </View>
      <View className="flex-row gap-x-3 justify-start mt-2 mb-3 p-2">
        <TouchableOpacity
          className="rounded-full px-4 py-1"
          style={
            type === "all"
              ? {
                  backgroundColor: "#FF7F50",
                  borderColor: "#FF7F50",
                  borderWidth: 1,
                }
              : {
                  backgroundColor: "white",
                  borderColor: "#D9D9D9",
                  borderWidth: 1,
                }
          }
          onPress={() => setType("all")}
        >
          <Text
            style={
              type === "all"
                ? { color: "#fff" }
                : {
                    color: "#000",
                  }
            }
          >
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-full px-4 py-1"
          style={
            type === "notRead"
              ? {
                  backgroundColor: "#FF7F50",
                  borderColor: "#FF7F50",
                  borderWidth: 1,
                }
              : {
                  backgroundColor: "white",
                  borderColor: "#D9D9D9",
                  borderWidth: 1,
                }
          }
          onPress={() => setType("notRead")}
        >
          <Text
            style={
              type === "notRead"
                ? { color: "#fff" }
                : {
                    color: "#000",
                  }
            }
          >
            Đã đọc
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <MessageList dataList={messages} />
      </ScrollView>
    </View>
  );
}

export default Message;
