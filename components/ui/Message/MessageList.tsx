import { View } from "react-native";
import MessageItem from "./MessageItem";
import { Message } from "@/interface/Message";

const MessageList: React.FC<{ dataList: Message[] }> = ({
  dataList,
}) => {
  return (
    <View className="pb-5">
      {dataList.map((message) => (
        <MessageItem key={message.id} data={message} />
      ))}
    </View>
  );
};

export default MessageList;
