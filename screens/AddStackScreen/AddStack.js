import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Add = ({ navigator }) => {
    return (
        <View></View>
    )
}
export default AddStack => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="Add" component={Add} options={{ title: 'Add House' }} />
        </Stack.Navigator>
    );
}