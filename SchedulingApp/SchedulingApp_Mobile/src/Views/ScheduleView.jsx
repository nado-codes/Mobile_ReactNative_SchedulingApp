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
  const makeTime = (value) => {
    const valueString = value.toString();

    return `${value < 10 ? "0" : ""}${value}:00`;
  };

  const itemCount = Array.from(Array(20).keys());
  const listOrigin = itemCount.map((n) => ({
    time: makeTime(n),
    task: "Do a thing",
  }));

  // REACT DRAGGABLE CODE
  const NUM_ITEMS = 10;

  function getColor(i) {
    const multiplier = 255 / (NUM_ITEMS - 1);
    const colorVal = i * multiplier;
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
  }

  const exampleData = [...Array(20)].map((d, index) => {
    const backgroundColor = getColor(index);
    return {
      key: `item-${backgroundColor}`,
      label: String(index),
      backgroundColor,
    };
  });

  /* const renderItem = useCallback(({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? "red" : "green",
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
          }}
        >
          {item[Object.keys(item)[1]]}
        </Text>
      </TouchableOpacity>
    );
  }, []); */

  // END REACT DRAGGABLE CODE

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
        <View style={{ ...styles.cell, flex: 0.5, backgroundColor: "white" }}>
          <Text style={{ color: "#000" }}>{item?.time ?? `NO_TIME`}</Text>
        </View>
        <View style={{ ...styles.cell, flex: 1 }}>
          <Text>{item?.task ?? `NO_TASK`}</Text>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View style={{ display: "flex", flex: 1 }}>
      {/* <ScrollView nestedScrollEnabled={true}>
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
          </ScrollView> */}
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
