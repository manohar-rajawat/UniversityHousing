import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SavedStack from './screens/SavedStackScreen/Index';
import SearchStack from './screens/SearchStackScreen/Index';
import InboxStack from './screens/InboxStackScreen/Index';
import AccountStack from './screens/AccountStackScreen/Index';
import AddStack from './screens/AddStackScreen/Index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='SearchStack' screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
      })}>
        <Tab.Screen name="SearchStack" component={SearchStack} options={{
          tabBarIcon: () => (<Ionicons name="search-outline" size={30} />),
          tabBarLabel: 'Search',
        }} />
        <Tab.Screen name="SavedStack" component={SavedStack} options={{
          tabBarIcon: () => (<Ionicons name="bookmark-outline" size={30} />),
          tabBarLabel: 'Saved',
        }} />
        <Tab.Screen name="AddStack" component={AddStack} options={{
          tabBarIcon: () => (<Ionicons name="add-outline" size={30} />),
          tabBarLabel: 'Add'
        }} />
        <Tab.Screen name="InboxStack" component={InboxStack} options={{
          tabBarBadge: 3,
          tabBarIcon: () => (<Ionicons name="chatbox-outline" size={30} />),
          tabBarLabel: 'Inbox'
        }} />
        <Tab.Screen name="AccountStack" component={AccountStack} options={{
          tabBarIcon: () => (<Ionicons name="person" size={30} />),
          tabBarLabel: 'Account'
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}