import { View } from "react-native";
import FeedbackItem from "./FeedbackItem";
import Feedback from "@/interface/Feedback";

const FeedbackList: React.FC<{ dataList: Feedback[] }> = ({ dataList }) => {
  return (
    <View>
      {dataList.map((feedback) => (
        <FeedbackItem key={feedback.ratableId} data={feedback} />
      ))}
    </View>
  );
};
export default FeedbackList;
