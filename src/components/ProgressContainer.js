import React, { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ProgressPro from './ProgressPro'

const ProgressContainer = ({ currentGame, gametype, data }) => {

    const game_type = () => currentGame === 1 ? "game_1" : "game_2";

    const graphData = (type) => {
        const newData = { ...data[0] };
        const team1_h1 = newData[game_type()].half_1.team_1[0];
        const team2_h1 = newData[game_type()].half_1.team_2[0];

        const team1_h2 = newData[game_type()].half_2.team_1[0];
        const team2_h2 = newData[game_type()].half_2.team_2[0];

        let val01 = 0;
        let val02 = 0;

        switch (gametype) {
            case 0:
                val01 = team1_h1[type] + team1_h2[type];
                val02 = team2_h1[type] + team2_h2[type];
                return { val01, val02 };
            case 1:
                val01 = team1_h1[type];
                val02 = team2_h1[type];
                return { val01, val02 };
            case 2:
                val01 = team1_h2[type];
                val02 = team2_h2[type];
                return { val01, val02 };
        }
    }

    return (
        <View>
            <ProgressPro
                title={`3 POINTS`}
                graphData={graphData("pt3_made")}
            />
            <ProgressPro
                title={`REBOUNDS`}
                graphData={graphData("offreb")}
            />
            <ProgressPro
                title={`ASSISTS`}
                graphData={graphData("ast")}
            />
            <ProgressPro
                title={`BLOCK`}
                graphData={graphData("blk")}
            />
        </View>
    )
}

export default memo(ProgressContainer)

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    }
})
