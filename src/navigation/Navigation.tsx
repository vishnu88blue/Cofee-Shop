import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../components/LandingPage';
import DashboardTabs from './DashboardBottomTabs';
import ItemDetails from '../screens/ItemDetails';
import Order from '../screens/Order';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="DashboardTabs" component={DashboardTabs} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="OrderDetails" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
