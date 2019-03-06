import {createStackNavigator, createAppContainer} from 'react-navigation';
import Booking from "./components/Views/Booking";
import Confirmation from "./components/Views/Confirmation";

const MainNavigator = createStackNavigator({
  Booking: {screen: Booking},
  Confirmation: {screen: Confirmation},
});

const App = createAppContainer(MainNavigator);

export default App;