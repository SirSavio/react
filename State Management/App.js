import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareReduxScreen from './src/screens/SquareReduxScreen';
import CounterReduxScreen from './src/screens/CounterReduxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareRedux: SquareReduxScreen,
    CounterRedux: CounterReduxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native",
    },
  }
);

export default createAppContainer(navigator);
