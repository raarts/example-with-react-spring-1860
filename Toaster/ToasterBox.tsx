import { StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AnimatedToasterBox } from "./AnimatedToasterBox";

interface props {
  type: string;
  text: string;
}

const ToasterBox = ({ type, text }: props) => {
  let icon;
  let backgroundColor;
  switch (type) {
    case "info":
      backgroundColor = "green";
      icon = <MaterialIcons name="info-outline" size={24} color="white" />;
      break;
    case "warning":
      backgroundColor = "darkorange";
      icon = <Ionicons name="warning-outline" size={24} color="white" />;
      break;
    case "error":
      backgroundColor = "red";
      icon = <MaterialIcons name="error-outline" size={24} color="white" />;
      break;
  }

  return (
    <AnimatedToasterBox>
      <View style={[styles.boxContainer, { backgroundColor }]}>
        <View style={styles.iconView}>{icon}</View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </View>
    </AnimatedToasterBox>
  );
};

export { ToasterBox };

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: "green",
    width: 300,
    padding: 10,
    margin: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    paddingRight: 8,
  },
  textView: {
    flexGrow: 1,
    flexDirection: "row",
  },
  textStyle: {
    flex: 1,
    width: 1,
    fontSize: 14,
    color: "white",
  },
});
