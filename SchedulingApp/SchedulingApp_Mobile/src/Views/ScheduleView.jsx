import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import ScheduleBlock from "../Components/ScheduleBlock";

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
      taskName: `Do a thing ${n}`,
    };
  });

  const [data, setData] = useState(listOrigin);

  const [debugText, setDebugText] = useState("");

  const debugLog = (text) => {
    setDebugText(text);
    // setTimeout(() => setDebugText(""), 3000);
  };

  /* useEffect(() => {
    debugLog(
      `data changed to: \n${data.map(({ taskName }) => taskName).join(`\n`)}`
    );
  }, [data]); */

  const handleBlockPositionChanged = (newData) => {
    debugLog(newData);
    /* debugLog(
      `data was: \n\n${data
        .map(({ taskName }) => taskName)
        .join(`\n`)}\n\n\n\n data changing to: \n\n${newData
        .map(({ taskName }) => taskName)
        .join(`\n`)}`
    );*/
    setData(newData.data);
  };
  const handleBlockTextChanged = (index, text) => {
    const newBlockData = {
      ...data[index],
      taskName: text,
    };
    // setData([...data.filter((x) => data.indexOf(x) !== index), newBlockData]); */

    return newBlockData.taskName;
  };

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "red", width: "100%" }}>
          <Text>{debugText}</Text>
        </View>
        <DraggableFlatList
          data={data}
          renderItem={(props) => {
            const { index } = props;

            return (
              <ScheduleBlock
                {...props}
                context={{
                  text: data[index].taskName,
                  onTextChanged: handleBlockTextChanged,
                  dayStartHour,
                  dayStartMinute,
                }}
              />
            );
          }}
          keyExtractor={(item, index) => `${data.indexOf(item)}`} //`draggable-item-${item.key}`}
          onDragEnd={({ data }) => setData(data)}
        />
      </ScrollView>
    </View>
  );
};
