import React from "react";
import { View, Image, Text } from "react-native";

const EventCard = ({ title, date, time, location, description, image }) => {
  return (
    <View className="flex bg-slate-50 my-5 rounded-xl shadow-sm">
      <View className="flex-1">
        <Image
          className=" rounded-t-2xl h-48 w-full object-cover"
          source={require("../assets/joel-muniz-qvzjG2pF4bE-unsplash.jpg")}
        ></Image>
      </View>
      <View className="flex flex-1 flex-col gap-1 p-3">
        <Text className="text-2xl">{title}</Text>
        <Text className="text-lg">
          {date} - {time}
        </Text>
        <Text className="text-lg text-slate-500">{location}</Text>
        <Text className="text-base">{description}</Text>
      </View>
    </View>
  );
};
export default EventCard;
