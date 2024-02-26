import React from "react";
import { View, Text, TextInput } from "react-native";

const FormComponent = ({ title, input, inputName, onChangeInput }) => {
  return (
    <View className="flex flex-col gap-2 justify-center my-[7px]">
      <Text className="text-xl">{title}</Text>
      <TextInput
        className="bg-slate-100 rounded-lg py-2 px-4"
        onChangeText={(newValue) => {
          onChangeInput(inputName, newValue);
        }}
        value={input}
      ></TextInput>
    </View>
  );
};

export default FormComponent;
