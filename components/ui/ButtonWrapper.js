import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const ButtonWrapper = (props) => {
  let Wrapper =
    Platform.OS === "android" ? TouchableOpacity : TouchableNativeFeedback;
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default ButtonWrapper;
