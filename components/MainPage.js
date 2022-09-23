import { StyleSheet, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import useNewsAPI from "../services/useNewsAPI";
import News from "./News";
import SearchNews from "./SearchNews";

const MainPage = ({ navigation: { navigate } }) => {
  const { getNews } = useNewsAPI();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((data) => setNews(data));
  }, []);

  return (
    <View style={styles.container}>
      <SearchNews setNews={setNews} />
      <ScrollView>
        {news.map((news, index) => (
          <News key={index} news={news} navigate={navigate} />
        ))}
      </ScrollView>
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
