import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from "rn-multi-progress-bar";

const ProgressPro = ({ title, graphData }) => {
    const { val01, val02 } = graphData;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.numberContainer}>
                <Text>
                    {val01}
                </Text>
                <Text>
                    {val02}
                </Text>
            </View>
            <View style={styles.progressContainer}>
                <ProgressBar
                    shouldAnimate={true} // to enable animation, default false
                    animateDuration={1000} // if animation enabled
                    data={[
                        { progress: val01, color: "#f0c648" },
                        { progress: val02, color: "#040404" },
                    ]}
                />
            </View>
        </View>
    )
}

export default memo(ProgressPro);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    text: {
        textAlign: "center",
    },
    progressContainer: {
        flexDirection: "row",
    },
    numberContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})
