import { View, TextInput, Button, StyleSheet, Platform } from "react-native";
import { useState, useMemo } from "react";
import useNewsAPI from "../services/useNewsAPI";
import DateTimePicker from "@react-native-community/datetimepicker";

const SearchNews = ({ setNews }) => {
  const { getNews } = useNewsAPI();
  const [value, setValue] = useState("");
  const [date, setDate] = useState(() => new Date());
  const [datePicker, setDatePicker] = useState(false);

  const checkNumber = (number) => {
    return number > 9 ? number : `0${number}`;
  };

  const dateFormat = (date) => {
    return `${checkNumber(date.getFullYear())}-${checkNumber(
      date.getMonth() + 1
    )}-${checkNumber(date.getDate())}`;
  };

  const onDateSelected = (event, value) => {
    setDate(value);
    setDatePicker(!datePicker);
  };

  const renderCalendar = useMemo(() => {
    if (datePicker) {
      return (
        <DateTimePicker
          value={new Date(date)}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onDateSelected}
          style={styles.datePicker}
        />
      );
    }
  }, [datePicker]);

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        placeholder="Looking for ..."
        value={value}
        onChangeText={setValue}
        autoCapitalize="none"
        autoCorrect={true}
        style={styles.input}
      />
      <Button
        title="Date"
        color="#636363"
        onPress={() => setDatePicker(!datePicker)}
      />
      <Button
        title="Search"
        color="#636363"
        onPress={() => {
          const dateForFetch = dateFormat(date);
          console.log(dateForFetch);
          getNews(value, dateForFetch).then((data) => setNews(data));
        }}
      />
      {renderCalendar}
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "50%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});

export default SearchNews;
