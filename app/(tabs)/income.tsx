import Header from "@/components/ui/Header";
import OverviewItem from "@/components/ui/OverviewItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import InvoiceList from "@/components/ui/Invoice/InvoiceList";
import images from "@/assets/images";
import { useState } from "react";

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
const Income = () => {
  const [tab, setTab] = useState('cash')

  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "white" }}
        className="pb-4"
      >
        <Header />
        <View className="px-2">
          <View>
            <Text className="font-semibold text-[18px] mt-[12px] mb-[10px]">
              THU NHẬP
            </Text>
            <View className="flex-row gap-x-3 justify-center">
              <OverviewItem title="Hôm nay" type="income" number={342000} />
              <OverviewItem title="Tuần qua" type="income" number={500000} />
              <OverviewItem title="Tháng qua" type="income" number={1000000} />
            </View>
          </View>
          <View>
            <View className="flex-row items-center mt-6 justify-between">
              <Text className="text-[16px]">
                Tất cả
              </Text>
              {
                <TouchableOpacity
                  className="flex-row gap-x-2 items-center p-2 px-4 rounded-[999px] border-[#FF7F50] border-[1px]"
                  // style={{ backgroundColor: "rgba(255, 127, 80, 0.2)" }}
                >
                  <MaterialIcons color="#FF7F50" name="filter" />
                  <Text className="text-[#FF7F50]">Bộ lọc</Text>
                </TouchableOpacity>
              }
            </View>
            <View className="flex-row w-full gap-x-4 justify-center mt-6">
              <View className="flex-col items-center py-3 px-4 rounded-[999px] border-[#FFEBE4] border-[1px] min-w-[100px] justify-center">
                <Text>Tổng</Text>
                <View className="flex-col items-center">
                  <Text className="text-[#27AE60] font-medium italic text-[14px]">
                    1,280,000đ
                  </Text>
                </View>
              </View>
              <View className="flex-col items-center py-3 px-4 rounded-[999px] border-[#FFEBE4] border-[1px] min-w-[100px] justify-center">
                <Text>Tiền mặt</Text>
                <View className="flex-col items-center">
                  <Text className="text-[#27AE60] font-medium italic text-[14px]">
                    1,280,000
                  </Text>
                </View>
              </View>
              <View className="flex-col items-center py-3 px-4 rounded-[999px] border-[#FFEBE4] border-[1px] min-w-[100px] justify-center">
                <Text>Tài khoản</Text>
                <View className="flex-col items-center">
                  <Text className="text-[#27AE60] font-medium italic text-[14px]">
                    1,280,000
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View className="flex-row mt-[40px]">
              <TouchableOpacity
                onPress={()=>setTab('cash')}
                className="w-1/2 p-3"
                style={tab === "cash" ? { backgroundColor: "#FFEBE4" } : {}}
              >
                <Text
                  style={
                    tab === "cash"
                      ? { color: "#D5420C", fontWeight: "500" }
                      : {}
                  }
                  className="text-center"
                >
                  Tiền mặt
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>setTab('credit')}
                className="w-1/2 p-3"
                style={tab === "credit" ? { backgroundColor: "#FFEBE4" } : {}}
              >
                <Text
                  style={
                    tab === "credit"
                      ? { color: "#D5420C", fontWeight: "500" }
                      : {}
                  }
                  className="text-center"
                >
                  Tài khoản liên kết
                </Text>
              </TouchableOpacity>
            </View>
            <InvoiceList dataList={orderList} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Income;
