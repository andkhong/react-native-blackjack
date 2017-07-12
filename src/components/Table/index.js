import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Dealer from './../Dealer/';
import Gambit from './../Gambit/';
import Hand from './../Hand/';
import Score from './../Score/';

function Table() {
    return (
        <View>
            <Dealer />
            <Gambit />
            <Score />
            <Hand />
        </View>
    )
}

export default Table;