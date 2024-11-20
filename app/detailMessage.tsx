import images from "@/assets/images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

function DetailMessage() {
  return (
    <View className="h-full bg-white px-4 pt-6">
      <ScrollView>
        <View className="flex-col gap-y-3 mt-5">
          <View className="flex-row gap-x-2 ms-auto">
            <View className="flex-col gap-y-1">
              <View className="bg-[#FF7F50] p-2 rounded-full px-4">
                <Text className="leading-[1.2] text-white">
                  Tư vấn giúp tôi ạ?
                </Text>
              </View>
              <Text className="text-[10px] text-[rgba(0,0,0,0.7)] ms-auto">
                30/08/2024, 8:00
              </Text>
            </View>
            <Image source={images.avatar}></Image>
          </View>
          <View className="flex-row gap-x-2">
            <Image source={images.avatar}></Image>
            <View className="flex-col gap-y-1">
              <View className="bg-[#FFEBE4] p-2 rounded-full px-4">
                <Text className="leading-[1.2] text-black">Chào bạn!</Text>
              </View>
              <Text className="text-[10px] text-[rgba(0,0,0,0.7)] ms-auto">
                30/08/2024, 8:02
              </Text>
            </View>
          </View>
          <View className="flex-row gap-x-2 ms-auto">
            <View className="flex-col gap-y-1">
              <View className="bg-[#FF7F50] p-2 rounded-full px-4">
                <Text className="leading-[1.2] text-white">
                  Tôi muốn đặt vé
                </Text>
              </View>
              <Text className="text-[10px] text-[rgba(0,0,0,0.7)] ms-auto">
                30/08/2024, 8:05
              </Text>
            </View>
            <Image source={images.avatar}></Image>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ borderTopColor: "#D9D9D9", borderTopWidth: 1 }}
        className="flex-row items-center py-5 gap-x-4"
      >
        <TextInput className="flex-1 bg-[#FFF6F3] rounded-full px-3 h-[40px]" placeholder="Nhập tin nhắn"></TextInput>
        <TouchableOpacity>
          <MaterialIcons
            name="send"
            size={24}
            color="#FF7F50"
            style={{
              transform: [{ rotate: "-40deg" }]
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DetailMessage;
