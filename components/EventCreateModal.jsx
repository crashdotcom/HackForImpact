import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import FormComponent from "./FormComponent";

const EventCreateModal = ({ closeModal, eventList, setEventList }) => {
  [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: "",
  });

  const handleOnChangeInput = (prop, newValue) => {
    setForm({
      ...form,
      [prop]: newValue,
    });
  };

  const handleCloseForm = () => {
    closeModal();
    setForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "",
    });
  };

  return (
    <View className="absolute flex flex-col top-12 bottom-0 p-7 rounded-t-[35px] right-0 left-0 z-10 bg-emerald-400">
      <View className="flex flex-row justify-center items-center">
        <Pressable
          className="border-2 border-slate-200 bg-slate-200 rounded-full 1 w-6 h-6 flex justify-center items-center"
          onPress={() => {
            handleCloseForm();
          }}
        >
          <Text className="text-slate-800 font-extrabold">X</Text>
        </Pressable>
        <Text className="font-bold my-3 flex-1 text-center text-base">
          Create your Event
        </Text>
        <Pressable
          className="border-2 border-red-500 bg-red-500 rounded-full p-2"
          onPress={() => {
            handleCloseForm();
            setEventList([
              ...eventList,
              {
                title: form.title,
                date: form.date,
                time: form.time,
                location: form.location,
                description: form.description,
                image: form.image,
              },
            ]);
          }}
        >
          <Text className="text-slate-100">Done</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View className="flex flex-col px-3 pt-9">
          <FormComponent
            title="Name of Event"
            input={form.title}
            inputName="title"
            onChangeInput={handleOnChangeInput}
          ></FormComponent>
          <FormComponent
            title="Date"
            input={form.date}
            inputName="date"
            onChangeInput={handleOnChangeInput}
          ></FormComponent>
          <FormComponent
            title="Time"
            input={form.time}
            inputName="time"
            onChangeInput={handleOnChangeInput}
          ></FormComponent>
          <FormComponent
            title="Location"
            input={form.location}
            inputName="location"
            onChangeInput={handleOnChangeInput}
          ></FormComponent>
          <FormComponent
            title="Description"
            input={form.description}
            inputName="description"
            onChangeInput={handleOnChangeInput}
          ></FormComponent>
          <FormComponent
            title="Image (optional)"
            input={form.image}
            inputName="image"
            onChangeInput={handleOnChangeInput}
          ></FormComponent>
        </View>
      </ScrollView>
    </View>
  );
};

export default EventCreateModal;
