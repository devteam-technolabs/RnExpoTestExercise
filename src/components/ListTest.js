import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { Card } from "@rneui/themed";

const Food = [
  {
    id: 1,
    title: "Bananas",
    Shop: "Grocery Ape",
    weight: "2",
  },
  {
    id: 2,
    title: "Sugar",
    Shop: "Candy shop",
    weight: "0,5",
  },
  {
    id: 3,
    title: "Tuna",
    Shop: "Temple of the catch",
    weight: "155",
  },
];
const Technology = [
  {
    id: 4,
    title: "Polystation",
    Shop: "Stairsmart",
    weight: "300",
  },
];
function ListTest() {
  return (
    <View style={{ marginBottom: 40 }}>
      <Text style={styles.headingStyle}>List test</Text>
      <Card
        containerStyle={{
          width: "100%",
          alignSelf: "center",
        }}
      >
        <Text style={styles.Headertitle}>Food</Text>

        <FlatList
          data={Food}
          renderItem={({ item, index, separators }) => (
            <View style={styles.rowcontainer}>
              <View style={styles.titlerow}>
                <View style={styles.rectangleview}></View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.Shop}</Text>
                </View>
              </View>
              <View style={styles.titlerow}>
                <Text style={styles.title}>{item.weight}</Text>
                <Text style={styles.subtitle}>Kg</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={[styles.Headertitle, { marginTop: 16 }]}>Technology</Text>
        <FlatList
          data={Technology}
          renderItem={({ item, index, separators }) => (
            <View style={styles.rowcontainer}>
              <View style={styles.titlerow}>
                <View style={styles.rectangleview} />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.Shop}</Text>
                </View>
              </View>
              <View style={styles.titlerow}>
                <Text style={styles.title}>{item.weight}</Text>
                <Text style={styles.subtitle}>Qt</Text>
              </View>
            </View>
          )}
        />
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rowcontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    marginRight: 20,
  },
  headingStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 16,
  },
  titlerow: {
    flexDirection: "row",
  },
  rectangleview: {
    height: 32,
    width: 32,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  title: {
    fontSize: 13,
    color: "#4A4A4A",
    paddingLeft: 5,
    fontWeight: "bold",
  },
  Headertitle: {
    fontSize: 13,
    color: "#808080",
    paddingLeft: 5,
  },
  listtitle: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  subtitle: {
    fontSize: 13,
    color: "#C2C2C2",
    paddingLeft: 5,
  },
});
export default React.memo(ListTest);
