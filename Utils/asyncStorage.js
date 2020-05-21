import { AsyncStorage } from "react-native";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("GuidieAllGoals", jsonValue);
    console.log("Data saved successfuly!");
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("GuidieAllGoals");
    console.log("Data retrieved successfuly!");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};
