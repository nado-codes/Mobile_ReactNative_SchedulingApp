import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";
import { NavigationContainer } from "@react-navigation/native";

export default Layout = () => {
  const Tab = createBottomTabNavigator();
  const Nav = createRef();

  /* function MyTabBar({ navigation }) {
    return (
      <Button
        title="Go somewhere"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate('SomeScreen');
        }}
      />
    );
  } */

  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator /* tabBar={(props) => <MyTabBar {...props} />} */>
          <Tab.Screen name="Schedule" component={ScheduleView} />
          <Tab.Screen name="Tasks" component={TasksView} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
