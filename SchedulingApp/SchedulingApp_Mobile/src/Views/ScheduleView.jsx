import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

export default ScheduleView = (/* {list} */) => {
  // Note: .. DUMMY DATA
  const dayStartHour = 0;
  const dayStartMinute = 0;
  const dayLengthHours = 18;
  const blocks = dayLengthHours * 4;

  const leadZero = (val) => (val < 10 ? "0" + val : val);

  const itemCount = Array.from(Array(blocks).keys());
  const listOrigin = itemCount.map((n) => ({
    time: `${leadZero(Math.floor(n / 4))}:${leadZero((n % 4) * 15)}`, // `${n < 10 ? "0" : ""}${n}:00`,
    task: `Do a thing ${n}`,
  }));

  const [data, setData] = useState(listOrigin);

  const renderItem = useCallback(
    ({ item, index, drag, isActive }) => (
      <TouchableOpacity
        key={index}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          height: 50,
        }}
        onLongPress={drag}
      >
        {isActive && (
          <View
            style={{
              position: "absolute",
              zIndex: 100,
              width: "100%",
              height: 50,
              backgroundColor: "white",
              opacity: 0.5,
            }}
          />
        )}

        {/* Time Cell */}
        <View style={{ ...styles.cell, flex: 0.5, backgroundColor: "white" }}>
          {!isActive && (
            <Text style={{ color: "#000" }}>{`${leadZero(
              Math.floor(index / 4)
            )}:${leadZero((index % 4) * 15)}`}</Text>
          )}
        </View>

        {/* Task Cell */}
        <View style={{ ...styles.cell, flex: 1 }}>
          <Text>{item?.task ?? `NO_TASK`}</Text>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${data.indexOf(item)}`} //`draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
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
