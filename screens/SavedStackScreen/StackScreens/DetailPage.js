import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Expense from '../../../components/Expense';
import Matrix from '../../../components/Matrix';
import Amenity from '../../../components/Amenity';

const Column = ({ children }) => (
    <View style={styles.columnContainer}>
        {children}
    </View>
)

const Description = ({ children }) => (
    <View style={styles.descriptionContainer}>
        {children}
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
            <View style={{ flex: 1.5, }}>
                <SafeAreaView style={{ flex: 1, }}>
                    <ScrollView style={styles.scrollView}>
                        <Expense expense={house.expenses} />
                        <Column>
                            <Matrix matrix={house.matrix} />
                            <View style={{ borderColor: '#666', borderWidth: 0.5, borderRadius: 20, }}></View>
                            <Amenity amenity={house.amenities} />
                        </Column>
                        <Description>
                            <Text style={styles.textDescription}>{house.description}</Text>
                        </Description>
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
    columnContainer: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    descriptionContainer: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        minHeight: 100,
    },
    textDescription: {
        fontSize: 15,
        textAlign: 'justify',
    },
})