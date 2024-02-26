import React, { useState } from "react";
import { FlatList, View, Text, Button } from "react-native";
import EventCard from "./EventCard";
import EventCreateModal from "./EventCreateModal";

const HomePage = ({ eventList, setEventList }) => {
  [showEventCreateModal, setEventCreateModal] = useState(false);

  return (
    <View className="flex flex-col h-full">
      {showEventCreateModal && (
        <EventCreateModal
          closeModal={() => {
            setEventCreateModal(false);
          }}
          setEventList={setEventList}
          eventList={eventList}
        ></EventCreateModal>
      )}

      <View className="flex relative bg-emerald-200 border-2 border-emerald-200 rounded-2xl justify-center items-center px-4">
        <Text className="text-xl font-extrabold mt-20">
          Friends of Hoover Durant Public Library
        </Text>
        <Button
          className="absolute right-0 top-0"
          onPress={() => {
            setEventCreateModal(true);
          }}
          title="Create an Event"
        />
      </View>

      <View className="px-5 flex flex-1">
        <View>
          <Text className="mt-8 font-bold text-2xl">
            Upcoming Events For You
          </Text>
        </View>
        <FlatList
          className="flex flex-col flex-1 bg-slate-100"
          data={eventList}
          renderItem={({ item }) => (
            <EventCard
              title={item.title}
              date={item.date}
              time={item.time}
              location={item.location}
              description={item.description}
              image={item.image}
            ></EventCard>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default HomePage;
