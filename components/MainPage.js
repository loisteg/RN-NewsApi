import { useEffect, useState, useMemo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import useNewsAPI from "../services/useNewsAPI";
import News from "./News";
import SearchNews from "./SearchNews";
import Spinner from "./ui/Spinner";

const MainPage = ({ navigation: { navigate } }) => {
  const { getNews } = useNewsAPI();
  const [news, setNews] = useState([]);
  let content =
    news.length > 1 ? (
      news.map((news, index) => (
        <News key={index} news={news} navigate={navigate} />
      ))
    ) : (
      <Spinner />
    );

  useEffect(() => {
    getNews().then((data) => setNews(data));
  }, []);

  return (
    <View style={styles.container}>
      <SearchNews setNews={setNews} />
      <ScrollView>{content}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fbfbf8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainPage;
