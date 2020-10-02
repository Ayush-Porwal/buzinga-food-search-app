import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ResultCard = ({ data }) => {

    return(
        <View style = { styles.container }>
            <Image
                source = { { uri: data.restaurant.thumb ? data.restaurant.thumb : 'https://bitsofco.de/content/images/2018/12/broken-1.png' } }
                style = { styles.imageStyle }
            />
            <Text style = { styles.nameStyle }> { data.restaurant.name } </Text>
            <View style = { styles.statContainer }>
                <View style = { styles.ratingIconStyle }>
                    <Entypo name="star-outlined" size={17} color= "lime" />
                    <Text style = { styles.numStyle }> { data.restaurant.user_rating.aggregate_rating }/5 </Text>
                </View>
                <View style = { styles.voteIconStyle }>
                    <MaterialCommunityIcons name="vote" size={17} color="lime" />
                    <Text style = { styles.numStyle }> { data.restaurant.user_rating.votes } </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    imageStyle: {
        height: 150,
        width: 250,
        borderRadius: 5,
    },
    nameStyle: {
        fontWeight: 'bold'
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ratingIconStyle: {
        flexDirection: 'row',
    },
    voteIconStyle: {
        flexDirection: 'row',
        marginRight: 15,
    },
    numStyle: {
        alignSelf: 'center',
        color: 'red',
    }
});

export default ResultCard;