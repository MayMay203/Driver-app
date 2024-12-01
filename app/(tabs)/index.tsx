import images from "@/assets/images";
import Header from "@/components/ui/Header";
import OrderList from "@/components/ui/Order/OrderList";
import Order from "@/interface/Order";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const orderList: Partial<Order>[] = [
  {
    id: 1,
    name: "Huỳnh Thị Khánh Vân",
    gender: "Nữ",
    avatar: images.avatar,
    startingLocation: "08 Hà Văn Tính",
    destination: "Đại học Bách Khoa Đà Nẵng",
    total: 150000,
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Nam",
    avatar: images.avatar,
    startingLocation: "Location C",
    destination: "Location D",
    total: 200000,
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Nữ",
    avatar: images.avatar,
    startingLocation: "Location E",
    destination: "Location F",
    total: 120000,
  },
  {
    id: 4,
    name: "Alice Brown",
    gender: "Nam",
    avatar: images.avatar,
    startingLocation: "Location G",
    destination: "Location H",
    total: 180000,
  },
  {
    id: 5,
    name: "Michael Green",
    gender: "Nữ",
    avatar: images.avatar,
    startingLocation: "Location I",
    destination: "Location J",
    total: 160000,
  },
];

const Orders = () => {
  const [orders, setOrders] = useState<Partial<Order>[]>(orderList)

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }} className="pb-4">
        <Header />
        <View className="relative">
          <View className="bg-[rgba(255,255,255,0.7)] p-3 w-[70%] absolute right-[12px] top-[20px] z-10">
            <Text className="text-[#D34714] font-semibold text-[12px]">
              Xin chào Đức Anh!
            </Text>
            <Text className="text-[#D34714] font-semibold text-[10px]">
              Nhanh chóng, an toàn và luôn giữ vững tay lái để mọi chuyến đi đều
              an lành và đúng giờ nhé!
            </Text>
          </View>
          <Image source={images.slider}></Image>
          <View className="py-3 px-4 bg-[#fff] flex-row justify-center gap-x-8 absolute bottom-[-35px] left-[50%] transform translate-x-[-50%] w-[90%] rounded-[4px] border-[#FFEBE4] border-[1px]">
            <View className="flex-row gap-x-2 items-center">
              <Image source={images.avatar} className="object-contain"></Image>
              <View>
                <Text className="font-semibold mb-1">Bùi Nguyễn Đức Anh</Text>
                <View className="flex-row">
                  <Text className="text-[10px] font-semibold">
                    Không hoạt động
                  </Text>
                  {/* Button */}
                </View>
              </View>
            </View>
            <View className="flex-column gap-y-2">
              <View className="flex-row gap-x-2 items-center">
                <Image source={images.motor} />
                <Text>Xe máy</Text>
              </View>
              <View className="flex-row gap-x-2 items-center">
                <Image source={images.distance} />
                <Text>Quảng Nam</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="px-2">
          <Text className="font-semibold text-[18px] mt-[50px]">
            DANH SÁCH CÁC ĐƠN HIỆN CÓ
          </Text>
          <OrderList dataList={orders} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Orders;
