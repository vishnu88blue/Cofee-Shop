import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../components/LandingPage';
import DashboardTabs from './DashboardBottomTabs';

export type RootStackParamList = {
  LandingPage: undefined;
  DashboardTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="DashboardTabs" component={DashboardTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
