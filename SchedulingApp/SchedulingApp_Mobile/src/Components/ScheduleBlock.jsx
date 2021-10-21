import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import PropTypes from "prop-types";

export default ScheduleBlock = ({ index, drag, isActive, context }) => {
  const {
    text,
    onStartEdit,
    onTextChanged,
    dayStartHour,
    dayStartMinute,
    edit,
  } = context;

  const [myId, setMyId] = useState(undefined);

  const [editText, setEditText] = useState(
    text.length > 0 ? text : `Empty Task`
  );
  const [isEdit, setIsEdit] = useState(false);

  const leadZero = (val) => (val < 10 ? "0" + val : val);

  const hour = leadZero(Math.floor(index / 4) + dayStartHour);
  const minute = leadZero(Math.floor((index + dayStartMinute / 15) % 4) * 15);

  useEffect(() => {
    setMyId(index);
  }, []);

  useEffect(() => {
    setIsEdit(edit);
  }, [edit]);

  // .. Enable edit mode
  const handleEditTextClicked = () => {
    // onStartEdit(index);
    setIsEdit(true);
    console.log("Zeet");
  };

  // .. When the input field is changed during edit mode
  const handleTextChanged = (newText) => {
    setEditText(newText);
  };

  // .. When the user taps the "Done" option on the keyboard
  const handleTextSubmit = () => {
    const updatedText = onTextChanged(index, editText);
    setEditText(updatedText);
    setIsEdit(false);
  };

  return (
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
      onPress={handleEditTextClicked}
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
        {!isEdit && <Text>{`myId=${myId}`}</Text>}
        {isEdit && (
          <Input
            onChangeText={handleTextChanged}
            onSubmitEditing={handleTextSubmit}
            value={editText}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

ScheduleBlock.propTypes = {
  context: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onStartEdit: PropTypes.func,
  }).isRequired,
};

ScheduleBlock.defaultProps = {
  context: { onStartEdit: () => {} },
};

const styles = StyleSheet.create({
  cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
