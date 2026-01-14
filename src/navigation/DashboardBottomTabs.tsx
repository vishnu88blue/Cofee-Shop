import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourites from '../screens/Favourites';
import Cart from '../screens/Cart';
import Alerts from '../screens/Alerts';
import Home from '../screens/Home';
import TabIcon from '../components/TabIcon';

export type DashboardTabParamList = {
  Home: undefined;
  Favourites: undefined;
  Cart: undefined;
  Alerts: undefined;
};

const Tab = createBottomTabNavigator<DashboardTabParamList>();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
        },
        tabBarIcon: ({ focused }) => {
          return <TabIcon name={route.name} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Alerts" component={Alerts} />
    </Tab.Navigator>
  );
}
