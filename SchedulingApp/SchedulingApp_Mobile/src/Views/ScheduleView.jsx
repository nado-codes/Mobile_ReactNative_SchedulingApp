import React from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default ScheduleView = () => {
  const list = Array.from(Array(10).keys());

  return (
    <View style={{ position: "absolute", left: 0 }}>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider style={{ width: 1000 }}>
          <Avatar source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{`Item ${l}`}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};
