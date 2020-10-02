import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchText, onSearchTextChange, onSeachTextSubmit }) => {
    return(
        <View style = {styles.viewStyle} >
            <Feather
                name="search"
                style = { styles.iconStyle }
            />

            <TextInput            
                placeholder = "Search"
                autoCapitalize = 'none'
                autoCorrect = { false }
                value = { searchText }
                onChangeText = { onSearchTextChange }
                onEndEditing = { onSeachTextSubmit }
                style = { styles.textInputStyle }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#E0E0E0',
        height: 50,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 37,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    textInputStyle: {
        flex: 1,
        fontSize: 18,
    }

});

export default SearchBar;