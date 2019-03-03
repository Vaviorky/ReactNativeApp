import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Booking from "./components/Views/Booking";
import NavBar from "./components/NavBar";
import Confirmation from "./components/Views/Confirmation";

type Props = {};
export default class App extends Component<Props> {

  state = {
    currentContainer: ViewType.Booking,
    bookingInfo: null
  };

  renderNavBar = () => {
    const {currentContainer} = this.state;
    switch (currentContainer) {
      case ViewType.Booking:
        return <NavBar title="Rezerwacja pokoju" />;
      case ViewType.UserConfirm:
        return <NavBar title="Potwierdzenie" onBack={() => this.setState({currentContainer: ViewType.Booking})} />;
      default:
        return (
          <View>
            <Text>
              {`Unknown container: ${currentContainer}`}
            </Text>
          </View>
        )
    }
  };

  handleBookingSend = (bookingInfo) => {
    this.setState({bookingInfo, currentContainer: ViewType.UserConfirm})
  };

  renderPanel = () => {
    const {currentContainer, bookingInfo} = this.state;
    switch (currentContainer) {
      case ViewType.Booking:
        return <Booking onSubmitButtonClick={this.handleBookingSend} />;
      case ViewType.UserConfirm:
        return <Confirmation userInfo={bookingInfo} />;
      default:
        return (
          <View>
            <Text>
              {`Unknown container: ${currentContainer}`}
            </Text>
          </View>
        )
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        {this.renderPanel()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const ViewType = {
  Booking: 0,
  UserConfirm: 1
};
