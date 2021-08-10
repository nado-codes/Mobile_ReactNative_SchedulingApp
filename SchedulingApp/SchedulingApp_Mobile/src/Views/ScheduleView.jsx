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
  const dayStartHour = 3; // 03
  const dayStartMinute = 45; //45
  const dayEndHour = 21; //21
  const dayEndMinute = 30; //30
  const dayLengthHours =
    (new Date(0, 0, 0, dayEndHour, dayEndMinute, 0) -
      new Date(0, 0, 0, dayStartHour, dayStartMinute, 0)) /
    1000 /
    60 /
    60;
  const blocks = dayLengthHours * 4;

  console.log(new Date(0, 0, 0, dayStartHour));

  const leadZero = (val) => (val < 10 ? "0" + val : val);

  const itemCount = Array.from(Array(blocks).keys());
  const listOrigin = itemCount.map((n) => {
    return {
      time: `${leadZero(n / 4)}:${leadZero((n % 4) * 15)}`, // `${n < 10 ? "0" : ""}${n}:00`,
      task: `Do a thing ${n}`,
    };
  });

  const [data, setData] = useState(listOrigin);

  const renderItem = useCallback(({ item, index: n, drag, isActive }) => {
    const hour = leadZero(Math.floor(n / 4) + dayStartHour);
    const minute = leadZero(Math.floor((n + dayStartMinute / 15) % 4) * 15);

    return (
      <TouchableOpacity
        key={n}
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
            <Text style={{ color: "#000" }}>{`${hour}:${minute}`}</Text>
          )}
        </View>

        {/* Task Cell */}
        <View style={{ ...styles.cell, flex: 1 }}>
          <Text>{item?.task ?? `NO_TASK`}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

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
