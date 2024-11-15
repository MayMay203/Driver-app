import Header from "@/components/ui/Header";
import { View } from "react-native";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <View>
      <Header />
      {children}
    </View>
  );
};

export default DefaultLayout;
