import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import AddNew from './screens/AddNew';
import AddNewButton from './components/AddNewButton';

const Tab = createBottomTabNavigator();

export default function AppContainer() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'white',
        safeAreaInset: {top: 'never', bottom: 'always'},
        showLabel: false,
        style: {backgroundColor: 'black'},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Discover') {
            iconName = 'magnify';
          } else if (route.name === 'Inbox') {
            iconName = 'message-outline';
          } else if (route.name === 'Profile') {
            iconName = 'account-outline';
          } else if (route.name === 'AddNew') {
            return <AddNewButton />;
          }
          // You can return any compo nent that you like here!
          return (
            <MaterialCommunityIcons size={size} name={iconName} color={color} />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home!'}}
      />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="AddNew" component={AddNew} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
