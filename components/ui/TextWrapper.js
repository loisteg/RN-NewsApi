import { Text, StyleSheet } from "react-native";

const TextWrapper = (props) => {
  return <Text style={[styles.default, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-regular",
  },
});

export default TextWrapper;
