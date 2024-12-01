import images from "@/assets/images";
import Header from "@/components/ui/Header";
import InvoiceList from "@/components/ui/Invoice/InvoiceList";
import OverviewItem from "@/components/ui/OverviewItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const orderList = [
  {
    id: 1,
    name: "Huỳnh Thị Khánh Vân",
    gender: "Nữ",
    avatar: images.avatar,
    startingLocation: "08 Hà Văn Tính",
    destination: "Đại học Bách Khoa Đà Nẵng",
    total: 150000,
    createAt: "12:00 20-11-2024",
    paidAt: "12:00 20-11-2024",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Nam",
    avatar: images.avatar,
    startingLocation: "Location C",
    destination: "Location D",
    total: 200000,
    createAt: "12:00 20-11-2024",
    paidAt: "12:00 20-11-2024",
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Nữ",
    avatar: images.avatar,
    startingLocation: "Location E",
    destination: "Location F",
    total: 120000,
    createAt: "12:00 20-11-2024",
    paidAt: "12:00 20-11-2024",
  },
  {
    id: 4,
    name: "Alice Brown",
    gender: "Nam",
    avatar: images.avatar,
    startingLocation: "Location G",
    destination: "Location H",
    total: 180000,
    createAt: "12:00 20-11-2024",
    paidAt: "12:00 20-11-2024",
  },
  {
    id: 5,
    name: "Michael Green",
    gender: "Nữ",
    avatar: images.avatar,
    startingLocation: "Location I",
    destination: "Location J",
    total: 160000,
    createAt: "12:00 20-11-2024",
    paidAt: "12:00 20-11-2024",
  },
];

const History = () => {
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "white" }}
        // style={{ backgroundColor: "rgba(255,246,243,0.4)" }}
        className="pb-4"
      >
        <Header />
        <View className="px-2">
          <View>
            <Text className="font-medium text-[18px] mt-[12px] mb-[10px]">
              TỔNG SỐ CHUYẾN
            </Text>
            <View className="flex-row gap-x-3 justify-center">
              <OverviewItem title="Hôm nay" type="history" number={10} />
              <OverviewItem title="Tuần qua" type="history" number={32} />
              <OverviewItem title="Tháng qua" type="history" number={43} />
            </View>
          </View>
          <View>
            <View className="flex-row items-center mt-6 justify-between">
              <Text className="text-[16px]">Tất cả</Text>
              {
                <TouchableOpacity className="flex-row gap-x-2 items-center p-2 px-4 rounded-[999px] border-[#FF7F50] border-[1px]">
                  <MaterialIcons color="#FF7F50" name="filter" />
                  <Text className="text-[#FF7F50]">Bộ lọc</Text>
                </TouchableOpacity>
              }
            </View>
            <View className="flex-row w-full gap-x-4 justify-center mt-7">
              <View className="flex-row p-2 px-4 rounded-[999px] border-[#D34714] border-[1px] w-[150px] justify-center bg-[#D34714]">
                <Text className="text-[16px] text-white font-bold">124 chuyến</Text>
              </View>
              <View className="flex-row p-2 px-4 rounded-[999px] border-[#D34714] border-[1px] w-[150px] justify-center bg-[#D34714]">
                <Text className="text-[16px] text-white font-bold">
                  1.280.000 VNĐ
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text className="font-semibold text-[18px] mt-[32px] mb-[10px]">
              LỊCH SỬ CHUYẾN XE
            </Text>
            <InvoiceList dataList={orderList} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default History;
