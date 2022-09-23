import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/MainPage";
import ChoosenNews from "./components/ChoosenNews";

const NestedScreens = createNativeStackNavigator();

const Routes = () => {
  return (
    <NestedScreens.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <NestedScreens.Screen name="MainPage" component={MainPage} />
      <NestedScreens.Screen name="ChoosenNews" component={ChoosenNews} />
    </NestedScreens.Navigator>
  );
};

export default Routes;
