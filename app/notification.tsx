import NotificationList from "@/components/ui/Notification/NotificationList";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const dataList = [
  {
    id: 1,
    title: "Thông báo mới",
    message: "Bạn đã nhận đơn hàng mới từ đối tác",
    createAt: "12:30 10-05-2022",
    isSeen: false,
  },
  {
    id: 2,
    title: "Thông báo đơn hàng",
    message: "Bạn đã xác nhận đơn hàng từ đối tác",
    createAt: "12:30 10-05-2022",
    isSeen: true,
  },
  {
    id: 3,
    title: "Xác nhận thành đối tác",
    message: "Bạn đã được xác nhận trở thành đối tác nhà xe",
    createAt: "12:30 10-05-2022",
    isSeen: false,
  },
  {
    id: 4,
    title: "Đặt vé thành công",
    message: "Bạn đã xác nhận đơn hàng từ đối tác",
    createAt: "12:30 10-05-2022",
    isSeen: false,
  },
  {
    id: 5,
    title: "Đặt vé thành công",
    message: "Bạn đã xác nhận đơn hàng từ đối tác",
    createAt: "12:30 10-05-2022",
    isSeen: false,
  },
  {
    id: 6,
    title: "Đặt vé thành công",
    message: "Bạn đã xác nhận đơn hàng từ đối tác",
    createAt: "12:30 10-05-2022",
    isSeen: false,
  },
  {
    id: 7,
    title: "Đặt vé thành công",
    message: "Bạn đã xác nhận đơn hàng từ đối tác",
    createAt: "12:30 10-05-2022",
    isSeen: false,
  },
];
const Notification = () => {
  const [type, setType] = useState<string>("all");

  return (
    <View className="h-full bg-white p-[4px]">
      <Text className="font-bold text-[#000] text-[20px]">Thông báo</Text>
      <View className="flex-row gap-x-3 justify-start mt-3 mb-3">
        <TouchableOpacity
          className="rounded-full px-4 py-1"
          style={
            type === "all"
              ? { backgroundColor: "#FF7F50", borderColor: "#FF7F50" }
              : {
                  backgroundColor: "white",
                  borderColor: "#D9D9D9",
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
        <NotificationList dataList={dataList} />
      </ScrollView>
    </View>
  );
};

export default Notification;
