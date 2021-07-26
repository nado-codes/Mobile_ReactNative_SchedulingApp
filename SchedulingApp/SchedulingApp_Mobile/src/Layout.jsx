import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";
import { NavigationContainer } from "@react-navigation/native";

export default Layout = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Schedule" component={ScheduleView} />
          <Tab.Screen name="Tasks" component={TasksView} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
