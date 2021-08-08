import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default ScheduleView = (/* {list} */) => {
  // Note: .. DUMMY DATA
  const makeTime = (value) => {
    const valueString = value.toString();

    return `${value < 10 ? "0" : ""}${value}:00`;
  };

  const itemCount = Array.from(Array(20).keys());
  const list = itemCount.map((n) => ({
    time: makeTime(n),
    task: "Do a thing",
  }));

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <ScrollView nestedScrollEnabled={true}>
        {list.map((l, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              height: 50,
            }}
          >
            <View
              style={{ ...styles.cell, flex: 0.5, backgroundColor: "white" }}
            >
              <Text style={{ color: "#000" }}>{l?.time ?? `NO_TIME`}</Text>
            </View>
            <View style={{ ...styles.cell, flex: 1 }}>
              <Text>{l?.task ?? `NO_TASK`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
