import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import GameButton from '../components/GameButton';
import GameTypeContainer from '../components/GameTypeContainer';
import GameUsersContainer from '../components/GameUsersContainer';
import ProgressContainer from '../components/ProgressContainer';
import data from './../utils/result';

import styles from './mainStyles';

const Main = () => {
    //------------------ state data manage from here --------------------
    const [currentGame, setcurrentGame] = useState(1);
    /**
     * state 0, 1 or 2 
     * 0 = totle
     * 1 = 1st half
     * 2 = 2nd half
     * */
    const [gametype, setgametype] = useState(0);
    //------------------ end state data manage from here ------------------

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}
            >
                {/* select game from here */}
                <View style={styles.gameNameContainer}>
                    <GameButton
                        title={"Game 1"}
                        currentGame={currentGame}
                        value={1}
                        onChange={(val) => setcurrentGame(val)}
                    />
                    <GameButton
                        title={"Game2"}
                        currentGame={currentGame}
                        value={2}
                        onChange={(val) => setcurrentGame(val)}
                    />
                </View>

                {/* select game mode from here */}
                <GameTypeContainer
                    gametype={gametype}
                    onChange={(val) => setgametype(val)}
                />

                {/* show user mode here */}
                <GameUsersContainer />

                {/* progress show here */}
                <ProgressContainer
                    currentGame={currentGame}
                    gametype={gametype}
                    data={data}
                />
            </ScrollView>
        </View>
    )
}

export default Main;
