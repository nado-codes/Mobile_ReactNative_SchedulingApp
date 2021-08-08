import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";
import { Tab as TabElem, TabView, Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*
export default Layout = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
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
        <TabView.Item style={{ flex: 1, backgroundColor: "yellow" }}>
          <ScheduleView />
        </TabView.Item>
        <TabView.Item>
          <TasksView />
        </TabView.Item>
      </TabView>
    </View>
  );
};
*/
