import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Inbox = ({ navigator }) => {
    return (
        <View>

        </View>
    )
}
export default InboxStack => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="Inbox" component={Inbox} options={{ title: 'Inbox' }} />
        </Stack.Navigator>
    );
}