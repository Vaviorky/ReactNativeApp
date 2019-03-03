import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomFormControl from "../CustomFormControl";

const Confirmation = ({userInfo}) => {
  const {firstName, lastName, email, roomType, numberOfGuests, startDate, endDate} = userInfo;
  return (
    <View style={styles.container}>
      <CustomFormControl label="Imię">
        <Text style={{fontSize: 16}}>{firstName}</Text>
      </CustomFormControl>
      <CustomFormControl label="Nazwisko">
        <Text style={{fontSize: 16}}>{lastName}</Text>
      </CustomFormControl>
      <CustomFormControl label="E-mail">
        <Text style={{fontSize: 16}}>{email}</Text>
      </CustomFormControl>
      <CustomFormControl label="Rodzaj pokoju">
        <Text style={{fontSize: 16}}>{parseRoomType(roomType)}</Text>
      </CustomFormControl>
      <CustomFormControl label="Liczba gości">
        <Text style={{fontSize: 16}}>{numberOfGuests}</Text>
      </CustomFormControl>
      <CustomFormControl label="Data zameldowania">
        <Text style={{fontSize: 16}}>{startDate.toISOString().substring(0, 10)}</Text>
      </CustomFormControl>
      <CustomFormControl label="Data wymeldowania">
        <Text style={{fontSize: 16}}>{endDate.toISOString().substring(0, 10)}</Text>
      </CustomFormControl>
    </View>
  )
};

function parseRoomType(roomType) {
  switch (roomType) {
    default:
    case "single":
      return "Pojedynczy";
    case "double":
      return "Podwójny";
    case "triple":
      return "Potrójny";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
  }
});

export default Confirmation;