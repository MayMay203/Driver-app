import {Text, View } from "react-native";
import Notification from "@/interface/Notification";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const NotificationItem: React.FC<{ data: Notification }> = ({ data }) => {
  return (
    <View
      className="flex-row gap-x-2 justify-between border-[1px] border-[#FFF6F3] px-2 py-3"
      style={
        !data.isSeen
          ? { backgroundColor: "#FFF6F3" }
          : { backgroundColor: "#fff" }
      }
    >
      <View className="flex-row gap-x-3 items-center">
        <MaterialIcons name="add-alert" size={32} color="#FF7F50" />
        <View>
          <Text className="font-semibold text-[16px] mb-1 leading-[1.2] w-[275px]">
            {data.title}
          </Text>
          <Text className="leading-[1.2] mb-2 w-[275px]">{data.message}</Text>
          <Text className="italic text-[12px] text-[#FF7F50] font-semibold">
            {data.createAt}
          </Text>
        </View>
      </View>
      {!data.isSeen && (
        <View className="w-[10px] h-[10px] bg-[#FF7F50] rounded-full mt-2"></View>
      )}
    </View>
  );
};

export default NotificationItem;
