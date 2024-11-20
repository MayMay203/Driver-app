import images from "@/assets/images";
import { Message } from "@/interface/Message";
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";

const MessageItem: React.FC<{ data: Message }> = ({ data }) => {
  return (
    <Link href='/detailMessage'>
      <View
        className="flex-row gap-x-2 justify-between border-[1px] border-[#FFF6F3] px-2 py-3"
        style={
          !data.isSeen
            ? { backgroundColor: "#FFF6F3" }
            : { backgroundColor: "#fff" }
        }
      >
        <View className="flex-row gap-x-3 items-center">
          <Image
            source={images.avatar}
            className="w-[46px] h-[46px] rounded-full"
          ></Image>
          <View>
            <View className="flex-row justify-between w-[260px]">
              <Text className="font-semibold text-[16px] mb-1 leading-[1.2] w-[180px]">
                {data.senderName}
              </Text>
              <Text
                className="text-[11px] font-semibold"
                style={
                  data.isSeen ? { color: "rgba(0,0,0,0.5)" } : { color: "#000" }
                }
              >
                {data.date}
              </Text>
            </View>
            <View className="flex-row gap-x-3 items-center">
              <Text
                className="mb-2 w-[170px]"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {data.content}
              </Text>
              <Text className="text-[13px]">{data.time}</Text>
            </View>
          </View>
        </View>
        {!data.isSeen && (
          <View className="w-[10px] h-[10px] bg-[#FF7F50] rounded-full"></View>
        )}
      </View>
    </Link>
  );
};

export default MessageItem;
