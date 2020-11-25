import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'

import GameTypeButton from './GameTypeButton'

const GameTypeContainer = ({ gametype, onChange }) => {
    return (
        <View style={styles.container}>
            <GameTypeButton
                title={"TOTALS"}
                currentGameType={gametype}
                value={0}
                onChange={(val) => onChange(val)}
            />
            <GameTypeButton
                title={"1ST HALF"}
                currentGameType={gametype}
                value={1}
                onChange={(val) => onChange(val)}
            />
            <GameTypeButton
                title={"2ND HALF"}
                currentGameType={gametype}
                value={2}
                onChange={(val) => onChange(val)}
            />
        </View>
    )
}

export default memo(GameTypeContainer);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 24,
    }
});
