import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import HookCounter from "../components/HookCounter";
import HookMessages from "../components/HookMessages";
import HookSearch from "../components/HookSearch";
import ListTest from "../components/ListTest";
import CalendarTest from "../components/CalendarTest";
import { styles } from "./TestExercise.styles";

export function TestExercise() {
  return (
    <ScrollView style={styles.container}>
      <HookCounter />
      <HookSearch />
      <HookMessages />
      <CalendarTest />
      <ListTest />
    </ScrollView>
  );
}
