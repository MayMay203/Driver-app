import images from "@/assets/images";
import { Image, Text, View } from "react-native";

type overviewProps = {
  title: string;
  number: Number;
  type: string;
};

const OverviewItem: React.FC<overviewProps> = ({ title, type, number }) => {
  return (
    <View className="flex-col items-center gap-y-1 px-2 py-3 pb-4 bg-[#FFEBE4] w-[31%] rounded-[6px]">
      <View className="w-[80%] h-[1.5px] bg-[#FFF6F3]"></View>
      <Text className="text-[12px] text-[rgba(0,0,0,0.5)]">{title}</Text>
      <View className="flex-col items-center">
        <Text className="text-[14px] text-[#D5420C] font-bold">
          {type === "history" ? number + " chuyến" : number + ""}
        </Text >
        {type === "income" && <Text className="text-[14px] text-[#D5420C] font-bold">VNĐ</Text>}
      </View>
    </View>
  );
};

export default OverviewItem;
