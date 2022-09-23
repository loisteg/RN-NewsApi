import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const ChoosenNews = ({ route }) => {
  const news = route.params.news;
  const date = () => {
    const convertToDate = new Date(news.published);
    return `${convertToDate.getDate()}.${
      convertToDate.getMonth() + 1
    }.${convertToDate.getFullYear()}`;
  };

  return (
    // Must be button back
    <View style={styles.container}>
      <ScrollView style={styles.scrollWrapper}>
        <Image source={{ uri: news.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <View style={styles.wrapper}>
          <Text style={styles.source}>User ID: {news.source.id}</Text>
          <Text style={styles.source}>{news.source.name}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.aboutNewsInfo}>{news.author}</Text>
          <Text style={styles.aboutNewsInfo}>{date()}</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  scrollWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    height: Dimensions.get("window").height / 2,
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
