import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';

function mapStateToProps(state){
    return {
        hiddenDealer: state.dealer[0],
        dealerScore: state.dealerScore,
        handScore: state.handScore,
        winner: state.winner
    }
}

function Score(props){
    const { dealerScore, handScore, hiddenDealer, winner } = props;
    const preDealerScore = dealerScore ? dealerScore - parseInt(hiddenDealer) : 0;
    return (
        <View>
            <Text> {
                    winner ? `${winner} WINS Dealer: ${dealerScore} Hand: ${handScore}`
                           : `Dealer: ${preDealerScore} Hand: ${handScore}`
                    } 
            </Text>
        </View>
    );
}

export default connect(
    mapStateToProps
)(Score);