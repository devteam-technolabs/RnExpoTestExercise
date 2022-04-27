import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card, SearchBar } from "@rneui/themed";

function HookSearch() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View>
      <Text style={styles.headingStyle}>Search test</Text>

      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
        containerStyle={{
          padding: 0,
          borderColor: "#E8E8E8",
          borderWidth: 2,
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
        inputContainerStyle={{ backgroundColor: "#fff", margin: 0 }}
        inputStyle={{ fontSize: 13 }}
      />

      <Card
        containerStyle={{
          width: "100%",
          alignSelf: "center",
        }}
      >
        <View style={styles.cardRowStyle}>
          <Image style={styles.imageStyle} />
          <View>
            <Text>Searched text</Text>
            <Text style={styles.countTextStyle}>{search}</Text>
          </View>
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
  cardRowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    width: 50,
    height: 50,
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    marginRight: 16,
  },
  countTextStyle: { color: "#C2C2C2" },
});

export default React.memo(HookSearch);
