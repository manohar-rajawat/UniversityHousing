import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Keyboard, Image, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const Logo = ({ logo }) => {
    return (
        <View style={styles.preImageWrapper}>
            <FastImage style={{ width: 50, height: 50, }} source={logo} />
        </View>
    )
}

const Alpha = () => (
    <View style={styles.preTextWrapper}>
        <Text style={styles.preText}>CA</Text>
    </View>
)

export default SearchResult = ({ predictNameList, clearSearchBox }) => {
    const navigation = useNavigation();
    const clickUniversity = (item) => {
        Keyboard.dismiss();
        clearSearchBox();
        navigation.navigate('ResultSearchHousing', {
            item: item
        });
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => clickUniversity(item)} style={styles.universityWrapper}>
            {
                item.logo ? <Logo logo={item.logo} /> : <Alpha />
            }
            <Text style={{ fontSize: 12, fontWeight: '500', flexShrink: 1, }}>{item.name}</Text>
        </TouchableOpacity>
    )
    return (
        <FlatList style={{ flex: 1, }} data={predictNameList} renderItem={renderItem} keyboardDismissMode='on-drag' />
    )
}

const styles = StyleSheet.create({
    universityWrapper: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomColor: '#666',
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    preTextWrapper: {
        marginHorizontal: 10,
        backgroundColor: 'tomato',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderColor: '#666',
        borderWidth: 2,
    },
    preImageWrapper: {
        marginHorizontal: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preText: {
        color: '#FFF',
    },
})