import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Expenses from '../../../components/Expenses';
import Matrix from '../../../components/Matrix';

const Amenities = (amenity) => (
    <View>

    </View>
)

export default SavedHousing = ({ navigation, route }) => {
    const { house } = route.params;
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={house.logo} />
                </View>
                <View style={styles.connectCotnainer}>
                    <TouchableOpacity>
                        <Ionicons name="heart" size={40} color="tomato" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="chatbox-ellipses-outline" size={40} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="phone-square" size={40} color="green" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <SafeAreaView style={{ flex: 1, }}>
                    <ScrollView style={styles.scrollView}>
                        <Expenses expense={house.expenses} />
                        <Matrix matrix={house.matrix} />
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    imageContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    connectCotnainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    image: {
        width: '100%',
        height: '95%',
        borderRadius: 20,
    },
    scrollView: {

    },
})