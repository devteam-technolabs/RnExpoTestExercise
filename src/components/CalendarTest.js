import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import Moment from "moment";
function CalendarTest() {
  const [startDate, setSelectedStartDate] = useState(null);
  const [endDate, setSelectedendDate] = useState(null);

  const getMonday = (d) => {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    setSelectedStartDate(
      Moment(new Date(d.setDate(diff)))
        .format("YYYY-MM-DD")
        .toString()
    );
  };

  const getSunday = (d) => {
    const date = new Date();
    const today = date.getDate();
    const dayOfTheWeek = date.getDay();
    const newDate = date.setDate(today - dayOfTheWeek + 7);
    // return new Date(newDate);
    setSelectedendDate(
      Moment(new Date(newDate)).format("YYYY-MM-DD").toString()
    );
  };
  //const startDate=  getMonday(new Date());
  useEffect(() => {
    getMonday(new Date());
    getSunday(new Date());
  }, []);
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.headingStyle}>Calendar test</Text>
    
        <CalendarPicker
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          weekdays={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]}
          selectedDayTextColor="white"
          selectedDayColor="#3975FF"
          allowRangeSelection={true}
          onDateChange={setSelectedStartDate}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 16,
  },
});
export default React.memo(CalendarTest);
