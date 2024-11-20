import { View } from "react-native";
import Notification from "@/interface/Notification";
import NotificationItem from "./NotificationItem";


const NotificationList:React.FC<{dataList: Notification[]}>= ({ dataList})=> {
    return (<View className="pb-5">
        {
            dataList.map(notification => (
                <NotificationItem key={notification.id} data={notification}></NotificationItem>
            ))
        }
    </View> );
}

export default NotificationList;