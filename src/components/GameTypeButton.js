import React, { memo } from 'react'
import {
    StyleSheet, Text, TouchableOpacity,
} from 'react-native'

const GameTypeButton = ({ title = "", currentGameType, value, onChange }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    // backgroundColor: currentGameType === value ? "blue" : "white",
                    borderColor: currentGameType === value ? "yellow" : "black",
                }
            ]}
            onPress={() => onChange(value)}
        >
            <Text
                style={styles.text}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(GameTypeButton);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        // borderColor: "gray",
        marginLeft: 20,
    },
    text: {
        color: "black",
    }
});
