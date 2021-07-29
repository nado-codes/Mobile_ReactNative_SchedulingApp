import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";
import { Tab as TabElem, TabView, Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      {" "}
      <Tab.Screen name="Home" component={HomeScreen} />{" "}
      <Tab.Screen name="Settings" component={SettingsScreen} />{" "}
    </Tab.Navigator>
  );
} */

export default Layout = () => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <TabElem value={index} onChange={setIndex}>
        <TabElem.Item
          title="Schedule"
          icon={
            <Icon type="material-community" name="calendar-text" size={22} />
          }
          variant={"primary"}
        />
        <TabElem.Item
          title="Tasks"
          icon={
            <Icon
              type="material-community"
              name="order-bool-ascending-variant"
              size={22}
            />
          }
        />
      </TabElem>
      <TabView value={index} onChange={setIndex} style={{ marginTop: 10 }}>
        <TabView.Item>
          <ScheduleView />
        </TabView.Item>
        <TabView.Item>
          <TasksView />
        </TabView.Item>
      </TabView>
    </View>
  );
};
