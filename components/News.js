import { Text, StyleSheet, TouchableOpacity } from "react-native";

const News = ({ news, navigate }) => {
  // console.log(navigate);
  return (
    <TouchableOpacity
      style={styles.newsWrapper}
      onPress={() => navigate("ChoosenNews", { news })}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description.trim()}</Text>
    </TouchableOpacity>
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
