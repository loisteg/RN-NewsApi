import { View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import TextWrapper from "./ui/TextWrapper";
import TextWrapperBold from "./ui/TextWrapperBold";

import ButtonWrapper from "./ui/ButtonWrapper";
import { Ionicons } from "@expo/vector-icons";

const ChoosenNews = ({ route, navigation: { goBack } }) => {
  const news = route.params.news;
  const date = () => {
    try {
      const convertToDate = new Date(news.published);
      return `${convertToDate.getDate()}.${
        convertToDate.getMonth() + 1
      }.${convertToDate.getFullYear()}`;
    } catch {
      return "-";
    }
  };

  const checkEmptyString = (string) => {
    return string ? string : "-";
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <ButtonWrapper onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </ButtonWrapper>
      </View>
      <ScrollView style={styles.scrollWrapper} removeClippedSubviews={true}>
        <Image source={{ uri: news.imageUrl }} style={styles.image} />
        <TextWrapperBold style={styles.title}>
          {checkEmptyString(news.title)}
        </TextWrapperBold>
        <TextWrapper style={styles.description}>
          {checkEmptyString(news.description)}
        </TextWrapper>
        <View style={styles.wrapper}>
          <TextWrapper style={styles.source}>
            User ID:{" "}
            {checkEmptyString(news.source.id).length > 20
              ? `${checkEmptyString(news.source.id).slice(0, 20)}...`
              : checkEmptyString(news.source.id)}
          </TextWrapper>
          <TextWrapper style={styles.source}>
            {checkEmptyString(news.source.name).length > 20
              ? `${checkEmptyString(news.source.name).slice(0, 20)}...`
              : checkEmptyString(news.source.name)}
          </TextWrapper>
        </View>
        <View style={styles.wrapper}>
          <TextWrapper style={styles.aboutNewsInfo}>
            {checkEmptyString(news.author).length > 20
              ? `${checkEmptyString(news.author).slice(0, 20)}...`
              : checkEmptyString(news.author)}
          </TextWrapper>
          <TextWrapper style={styles.aboutNewsInfo}>
            {checkEmptyString(date())}
          </TextWrapper>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fbfbf8",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  scrollWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    height: Dimensions.get("window").height / 2,
    width: "100%",
    borderRadius: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
  },
  wrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  source: {
    fontSize: 16,
    fontWeight: "300",
  },
  aboutNewsInfo: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "500",
  },
});

export default ChoosenNews;
