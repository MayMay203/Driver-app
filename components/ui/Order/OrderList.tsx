import { View } from "react-native";
import OrderItem from "./OrderItem";
import Order from "@/interface/Order";

const OrderList: React.FC<{ dataList: Partial<Order>[] }> = ({ dataList }) => {
    return <View>
      {dataList.map((order) => (
        <OrderItem key={order.id} data={order}/>
      ))}
  
  </View>;
};

export default OrderList;
