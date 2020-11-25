import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameUsersContainer = () => {

    const userNameText = (text = "") => {
        return <Text style={styles.text}>{text}</Text>;
    }

    return (
        <View style={styles.container}>
            {userNameText("Guest")}
            {userNameText("Home")}
        </View>
    )
}

export default GameUsersContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
