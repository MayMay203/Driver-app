import images from "@/assets/images";
import Feedback from "@/interface/Feedback";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

const FeedbackItem: React.FC<{ data: Feedback }> = ({ data }) => {
  return (
    <Link href="/detailOrder">
      <View className="p-2 bg-[white] border-[1px] border-[#FFEBE4] mt-2">
        <View className="flex-row gap-x-2">
          <View className="flex-row gap-x-3 flex-1">
            <Image
              source={images.avatar}
              className="w-[40px] h-[40px] object-cover"
            ></Image>
            <View className="flex-col gap-x-2">
              <Text className="font-semibold mb-1 leading-[1.4]">
                {data.name}
              </Text>
              <Text className="text-[#B8B8B8] text-[12px]">
                {data.createAt}
              </Text>
            </View>
          </View>
          <View className="flex-row gap-x-1">
            {Array.from({ length: data.ratableValue }).map((_, index) => (
              <MaterialIcons key={index} name="star" color="yellow" size={20} />
            ))}
          </View>
        </View>
        <Text className="mt-3 leading-[1.3]">{data.content}</Text>
      </View>
    </Link>
  );
};
export default FeedbackItem;
