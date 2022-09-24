import { useState, useMemo } from "react";
import { View, TextInput, Button, StyleSheet, Platform } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import useNewsAPI from "../services/useNewsAPI";
import { AntDesign } from "@expo/vector-icons";

import ButtonWrapper from "./ui/ButtonWrapper";

const SearchNews = ({ setNews }) => {
  const { getNews } = useNewsAPI();
  const [value, setValue] = useState("");
  const [date, setDate] = useState(() => new Date());
  const [datePicker, setDatePicker] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("new");

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

  const sortNews = (type) => {
    switch (type) {
      case "A-Z":
        setNews((list) => [
          ...list.sort(
            (a, b) => a.title[0].toUpperCase() > b.title[0].toUpperCase()
          ),
        ]);
        break;
      case "Z-A":
        setNews((list) => [
          ...list.sort(
            (a, b) => b.title[0].toUpperCase() > a.title[0].toUpperCase()
          ),
        ]);
        break;
      case "new":
        setNews((list) => [
          ...list.sort(
            (a, b) =>
              new Date(b.published).getTime() - new Date(a.published).getTime()
          ),
        ]);
        break;
      case "old":
        setNews((list) => [
          ...list.sort(
            (a, b) =>
              new Date(a.published).getTime() - new Date(b.published).getTime()
          ),
        ]);
        break;
    }
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
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Looking for ..."
          value={value}
          onChangeText={setValue}
          autoCapitalize="none"
          autoCorrect={true}
          style={styles.input}
        />
        <ButtonWrapper>
          <AntDesign
            name="calendar"
            color="#000"
            size={26}
            onPress={() => setDatePicker(!datePicker)}
          />
        </ButtonWrapper>
        <Button
          title="Search"
          color="#636363"
          onPress={() => {
            if (value) {
              const dateForFetch = dateFormat(date);
              getNews(value, dateForFetch).then((data) => setNews(data));
            }
          }}
        />
        {renderCalendar}
      </View>
      <Picker
        style={styles.select}
        mode="dialog"
        selectedValue={selectedFilter}
        onValueChange={(itemValue) => {
          setSelectedFilter(itemValue);
          sortNews(itemValue);
        }}
      >
        <Picker.Item label="Sort in alphabetically (A-Z)" value="A-Z" />
        <Picker.Item label="Sort in alphabetically (Z-A)" value="Z-A" />
        <Picker.Item label="The newest" value="new" />
        <Picker.Item label="The oldest" value="old" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
  },
  searchWrapper: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "60%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  select: {
    width: "100%",
    height: 50,
  },
});

export default SearchNews;
