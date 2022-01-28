import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchHousing from './StackScreens/SearchHousing';
import ResultSearch from './StackScreens/ResultSearch';

export default SearchStack => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
        }}>
            <Stack.Screen name="SearchHousing" component={SearchHousing} options={{ title: 'Search' }} />
            <Stack.Screen name="ResultSearchHousing" component={ResultSearch} options={{ title: 'Result' }} />
        </Stack.Navigator>
    );
}