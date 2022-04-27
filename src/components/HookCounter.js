import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card } from "@rneui/themed";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.headingStyle}>Click test</Text>

      <Button
        title="Click me"
        buttonStyle={styles.buttonStyle}
        onPress={() => setCount(count + 1)}
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
            <Text>Number of button clicks</Text>
            <Text style={styles.countTextStyle}>{count}</Text>
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

export default React.memo(HookCounter);
