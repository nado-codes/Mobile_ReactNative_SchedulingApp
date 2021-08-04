import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default ScheduleView = () => {
  const list = Array.from(Array(20).keys());

  //style={{ flex: 1, width: 200, height: 1000 }}>
  return (
    <View style={{ flex: 1, height: 100, backgroundColor: "red" }}>
      <ScrollView nestedScrollEnabled={true}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider
            style={{ width: 1000, height: 50, backgroundColor: "pink" }}
          >
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{`Item ${l}`}</ListItem.Title>
              <ListItem.Subtitle>{`Example Item ${l}`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};
