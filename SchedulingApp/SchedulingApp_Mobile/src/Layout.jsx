import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";

export default Layout = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name="Schedule" component={ScheduleView} />
        <Tab.Screen name="Tasks" component={TasksView} />
      </Tab.Navigator>
    </View>
  );
};
