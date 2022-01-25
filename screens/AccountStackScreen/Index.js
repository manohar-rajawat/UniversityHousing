import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Account = ({ navigator }) => {
    return (
        <View>

        </View>
    )
}
export default AccountStack => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="Account" component={Account} options={{ title: 'Account' }} />
        </Stack.Navigator>
    );
}