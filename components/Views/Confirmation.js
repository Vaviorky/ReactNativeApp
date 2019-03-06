import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomFormControl from "../CustomFormControl";

const Confirmation = ({navigation}) => {
  const firstName = navigation.getParam("firstName", 'unknown');
  const lastName = navigation.getParam("lastName", 'unknown');
  const email = navigation.getParam("email", 'unknown');
  const startDate = navigation.getParam("startDate", 'unknown');
  const endDate = navigation.getParam("endDate", 'unknown');
  const roomType = navigation.getParam("roomType", 'unknown');
  const numberOfGuests = navigation.getParam("numberOfGuests", 'unknown');
  return (
    <View style={styles.container}>
      <CustomFormControl label="Imię">
        <Text style={styles.text}>{firstName}</Text>
      </CustomFormControl>
      <CustomFormControl label="Nazwisko">
        <Text style={styles.text}>{lastName}</Text>
      </CustomFormControl>
      <CustomFormControl label="E-mail">
        <Text style={styles.text}>{email}</Text>
      </CustomFormControl>
      <CustomFormControl label="Rodzaj pokoju">
        <Text style={styles.text}>{parseRoomType(roomType)}</Text>
      </CustomFormControl>
      <CustomFormControl label="Liczba gości">
        <Text style={styles.text}>{numberOfGuests}</Text>
      </CustomFormControl>
      <CustomFormControl label="Data zameldowania">
        <Text style={styles.text}>{startDate.toLocaleDateString("en-GB")}</Text>
      </CustomFormControl>
      <CustomFormControl label="Data wymeldowania">
        <Text style={styles.text}>{endDate.toLocaleDateString("en-GB")}</Text>
      </CustomFormControl>
    </View>
  )
};

Confirmation.navigationOptions = {
  title: 'Potwierdzenie rezerwacji',
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
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default Confirmation;