import { Image, Text, TouchableOpacity, View } from "react-native";
import images from "../../assets/images";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "./Button";

const Header = () => {
  const handleLogin = () => {};

  return (
    <View className="flex-row p-3 py-4 justify-between items-center bg-[#fff]"
    >
      <View>
        <Image
          source={images.logo}
          alt="logo"
          className="w-[180px] h-[20px] object-contain"
        ></Image>
        <Text className="ml-[24px] mt-[2px] text-[14px] text-[#A33A3A] font-semibold italic">
          Mỗi chuyến xe là mỗi...
        </Text>
      </View>
      <View className="flex-row gap-x-3 items-center">
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="#A33A3A" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="message" size={24} color="#A33A3A" />
        </TouchableOpacity>
        {/* <Button title="Đăng nhập" onPress={handleLogin} type="outline"></Button> */}
      </View>
    </View>
  );
};

export default Header;
