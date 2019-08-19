// Import Screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContactScreen from "./screens/AddNewContactScreen";
import ViewContactScreen from "./screens/ViewContactScreen";
import EditContactScreen from "./screens/EditContactScreen";

//Import React Navigation
import { createAppContainer, createStackNavigator } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContactScreen },
    Edit: { screen: EditContactScreen },
    View: { screen: ViewContactScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#ba2f16"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
