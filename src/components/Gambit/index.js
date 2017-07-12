import React from 'react';
import { connect } from 'react-redux';
import { shuffleDeck, drawHand, drawDealer } from './../../actions/gambitActions';

import {
    View,
    Text,
    Button
} from 'react-native';

function mapStateToProps(state) {
    return {
        score: state.dealerScore
    }
}

function mapDispatchToProps(dispatch){
    return {
        shuffle: () => dispatch(shuffleDeck()),
        hand: () => dispatch(drawHand()),
        dealer: () => dispatch(drawDealer())
    }
}

function Gambit(props) {
    const { shuffle, hand, dealer, score } = props;
    return (
        <View>
            <Button
                onPress={() => shuffle()}
                title="Shuffle"
            />
            <Button
                onPress={() => hand()}
                title="Draw"
            />
            <Button
                onPress={() => dealer()}
                title="Stand"
            />
        </View>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gambit);