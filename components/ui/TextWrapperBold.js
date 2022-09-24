import { Text, StyleSheet } from "react-native";

const TextWrapperBold = (props) => {
  return <Text style={[styles.default, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-bold",
  },
});

export default TextWrapperBold;
