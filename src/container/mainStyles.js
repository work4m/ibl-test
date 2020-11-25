const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        flexGrow: 1,
        // backgroundColor: "red",
    },
    gameNameContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 100,
    },
});

export default styles;
