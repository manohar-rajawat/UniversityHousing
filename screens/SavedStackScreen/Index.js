import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SavedHousing from './StackScreens/SavedHousing';
import DetailPage from './StackScreens/DetailPage';

export default SavedStack = ({ navigation, route }) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="Saved" component={SavedHousing} options={{ title: 'Saved' }} />
            <Stack.Screen name="DetailPage" component={DetailPage} options={{ title: 'Detail' }} />
        </Stack.Navigator>
    );
}