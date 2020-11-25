import React, { memo } from 'react'
import {
    StyleSheet, Text, TouchableOpacity,
} from 'react-native'

const GameButton = ({ title = "", currentGame, value, onChange }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: currentGame === value ? "blue" : "white",
                }
            ]}
            onPress={() => onChange(value)}
        >
            <Text
                style={{
                    color: currentGame === value ? "white" : "black",
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(GameButton);

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderColor: "gray"
    },
})
