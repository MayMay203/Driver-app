import images from "@/assets/images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const UserInfor = () => {
    const router = useRouter();
    return (
      <View className="flex-row gap-x-4 items-end">
        <View className="flex-row gap-x-2">
          <View className="flex-row gap-x-3">
            <Image
              source={images.avatar}
              className="object-cover mt-1 w-[40px] h-[40px] rounded-full border-[#D34714] border-[1px]"
            ></Image>
            <View>
              <Text className="text-[#D34714] font-semibold mb-1 max-w-[100px] leading-[1.4] text-[14px]">
                Bùi Thị Hoa
              </Text>
              <View className="flex-row">
                <Text className="text-[13px]">0948586868</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row gap-x-3 justify-between items-center flex-1">
          <View className="flex-row items-center gap-x-1">
            <MaterialIcons name="female" color="#2474E5" size={19} />
            <Text className="text-[12px]">Nữ</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/detailMessage")}>
            <Text className="text-[#FF7F50] italic px-2 py-1">Nhắn tin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default UserInfor;