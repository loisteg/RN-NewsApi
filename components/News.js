import { StyleSheet } from "react-native";
import ButtonWrapper from "./ui/ButtonWrapper";
import TextWrapper from "./ui/TextWrapper";
import TextWrapperBold from "./ui/TextWrapperBold";

const News = ({ news, navigate }) => {
  return (
    <ButtonWrapper
      style={styles.newsWrapper}
      onPress={() => navigate("ChoosenNews", { news })}
      activeOpacity={0.8}
    >
      <TextWrapperBold style={styles.title}>{news.title}</TextWrapperBold>
      <TextWrapper style={styles.description}>
        {news.description ? news.description.trim() : "-"}
      </TextWrapper>
    </ButtonWrapper>
  );
};

const styles = StyleSheet.create({
  newsWrapper: {
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    elevation: 5,
  },
  title: {
    textAlign: "left",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default News;
