import { Image } from "react-native";

const Spinner = () => {
  return (
    <Image
      source={require("../../assets/spinner.gif")}
      style={{ height: 100, width: 100 }}
    />
  );
};

export default Spinner;
