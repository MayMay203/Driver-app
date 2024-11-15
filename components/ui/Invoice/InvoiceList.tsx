import { View } from "react-native";
import HistoryItem from "./Invoice";
import Order from "@/interface/Order";

const OrderList: React.FC<{ dataList: Partial<Order>[] }> = ({ dataList }) => {
  return (
    <View>
      {dataList.map((order) => (
        <HistoryItem key={order.id} data={order} />
      ))}
    </View>
  );
};

export default OrderList;
