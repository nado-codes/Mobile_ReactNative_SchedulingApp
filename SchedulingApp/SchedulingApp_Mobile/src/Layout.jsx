import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";
import { Tab, TabView, Icon } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default Layout = () => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item
          title="Schedule"
          icon={
            <Icon type="material-community" name="calendar-text" size={22} />
          }
          variant={"primary"}
        />
        <Tab.Item
          title="Tasks"
          icon={
            <Icon
              type="material-community"
              name="order-bool-ascending-variant"
              size={22}
            />
          }
        />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <ScheduleView />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          <TasksView />
        </TabView.Item>
      </TabView>
    </View>
  );
};
