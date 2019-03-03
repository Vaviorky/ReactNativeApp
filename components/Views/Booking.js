import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Picker, Button} from 'react-native';
import CustomTextInput from "../CustomTextInput";
import DatePicker from "../DatePicker";
import CustomFormControl from "../CustomFormControl";

type Props = {
  onSubmitButtonClick: () => void
};

export default class Booking extends Component<Props> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    roomType: 'single',
    numberOfGuests: 1,
    startDate: new Date(),
    endDate: new Date()
  };

  render() {
    const {firstName, lastName, email, startDate, endDate, roomType, numberOfGuests} = this.state;
    const {onSubmitButtonClick} = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <CustomFormControl label="Imie">
          <CustomTextInput
            value={firstName}
            onChangeText={(newFirstName) => this.setState({firstName: newFirstName})}
          />
        </CustomFormControl>
        <CustomFormControl label="Nazwisko">
          <CustomTextInput
            value={lastName}
            onChangeText={(newLastName) => this.setState({lastName: newLastName})}
          />
        </CustomFormControl>
        <CustomFormControl label="E-mail">
          <CustomTextInput
            value={email}
            type="email-address"
            onChangeText={(newEmail) => this.setState({email: newEmail})}
          />
        </CustomFormControl>
        <CustomFormControl label="Rodzaj pokoju">
          <Picker
            selectedValue={roomType}
            onValueChange={itemValue => this.setState({roomType: itemValue})}
          >
            <Picker.Item label="Pojedynczy" value="single" />
            <Picker.Item label="Podwójny" value="double" />
            <Picker.Item label="Potrójny" value="triple" />
          </Picker>
        </CustomFormControl>
        <CustomFormControl label="Liczba gości">
          <CustomTextInput
            value={numberOfGuests.toString()}
            type="numeric"
            onChangeText={(newNumberOfGuests) => this.setState({numberOfGuests: newNumberOfGuests})}
          />
        </CustomFormControl>
        <CustomFormControl label="Data zameldowania">
          <DatePicker
            value={startDate}
            onChangeDate={newDate => this.setState({startDate: newDate})}
          />
        </CustomFormControl>
        <CustomFormControl label="Data wymeldowania">
          <DatePicker
            value={endDate}
            onChangeDate={newDate => this.setState({endDate: newDate})}
          />
        </CustomFormControl>
        <View style={{marginTop: 20}}>
          <Button title="Wyślij" onPress={() => onSubmitButtonClick(this.state)} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: "80%",
  }
});
