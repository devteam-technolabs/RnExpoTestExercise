import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Card, SearchBar, Text } from "@rneui/themed";

function HookMessages() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View>
      <Text style={styles.headingStyle}>Messages test</Text>

      <Card
        containerStyle={{
          backgroundColor: "#EAFFC9",
          width: "100%",
          alignSelf: "center",
          margin: 0,
        }}
      >
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              This is an empty state, to be used for messages and/or blog
              articles.
            </Text>

            <Text style={{ fontSize: 14, color: "#7D7D7D", marginTop: 16 }}>
              Four lines to describe the message/article to be highlighted. The
              text is accompanied by an illustration in the top right-hand
              corner.
            </Text>
          </View>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://png.pngtree.com/png-vector/20190425/ourlarge/pngtree-vector-document-search-icon-png-image_991411.jpg",
            }}
          />
        </View>
        <View style={[styles.row, { justifyContent: "flex-end" }]}>
          <Button
            containerStyle={{
              marginVertical: 10,
            }}
            title="Not now"
            type="clear"
            titleStyle={{ color: "#B4EDA0" }}
            onPress={() => {}}
          />
          <Button
            title="See message"
            buttonStyle={{
              backgroundColor: "#B4EDA0",
              borderRadius: 3,
              paddingHorizontal: 16,
            }}
            containerStyle={{
              marginVertical: 10,
              marginLeft: 16,
            }}
            onPress={() => {}}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 16,
  },
  buttonStyle: {
    backgroundColor: "#FFA978",
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
  },
  imageStyle: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  countTextStyle: { color: "#C2C2C2" },
});

export default React.memo(HookMessages);
