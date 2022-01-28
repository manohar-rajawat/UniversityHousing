import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { names } from '../../../data/names'
import SearchResult from '../../../components/SearchResult';
const width = Dimensions.get("screen").width

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const IconChange = ({ name, clearSearchBox }) => {
    if (name.length) {
        return (
            <TouchableOpacity onPress={() => clearSearchBox()}>
                <Ionicons name="close-outline" size={30} />
            </TouchableOpacity>
        )
    } else {
        return (
            <Ionicons name="search-outline" size={30} />
        )
    }
}

const CancelButton = ({ iscancellable, clearSearchBox }) => {
    if (iscancellable) {
        return (
            <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                        Keyboard.dismiss();
                        clearSearchBox();
                    }} />
            </View>
        )
    }
    return null;
}

export default SearchHousing = ({ navigation }) => {
    const [universityName, setUniversityName] = useState("");
    const [predictNameList, setPredictNameList] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const clearSearchBox = () => {
        setUniversityName("");
        setPredictNameList([]);
        setIsClicked(false);
    }
    const searchUniversity = (name) => {
        let universities = [];
        setUniversityName(name);
        if (name.length) {
            setIsClicked(true);
            for (let i = 0; i < names.length; i++) {
                if (names[i].name.toLowerCase().includes(name.toLowerCase())) {
                    universities.push(names[i]);
                }
            }
            setPredictNameList(universities);
        } else {
            setIsClicked(false);
            setPredictNameList([]);
        }
    }
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.lookupWrapper}>
                    <View style={styles.textInputWrapper}>
                        <TextInput onChangeText={text => searchUniversity(text)} value={universityName} style={styles.textInput} placeholder='Search University' placeholderTextColor='tomato' />
                        <IconChange name={universityName} clearSearchBox={clearSearchBox} />
                    </View>
                    <View>
                        <CancelButton iscancellable={isClicked} clearSearchBox={clearSearchBox} />
                    </View>
                </View>
                <View style={styles.resultWrapper}>
                    {
                        predictNameList.length > 0 &&
                        <SearchResult clearSearchBox={clearSearchBox} predictNameList={predictNameList} />
                    }
                </View>
            </View>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    lookupWrapper: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    resultWrapper: {
        flex: 1,
        marginTop: 5,
    },
    textInputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: width - 60,
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        height: 50,
    },
})