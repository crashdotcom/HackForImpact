import { StatusBar } from "expo-status-bar";
import { AppRegistry, Text, View } from "react-native";
import HomePage from "./components/HomePage";
import { useState } from "react";

export default function App() {
  [eventList, setEventList] = useState([
    {
      title: "event 1",
      date: "date",
      time: "time",
      location: "location",
      description: "description",
      image: "image",
    },
    {
      title: "event 2",
      date: "date",
      time: "time",
      location: "location",
      description: "description",
      image: "image",
    },
  ]);

  return (
    <View className="h-screen bg-slate-100 relative">
      <HomePage eventList={eventList} setEventList={setEventList}></HomePage>
      <StatusBar style="auto" />
    </View>
  );
}
