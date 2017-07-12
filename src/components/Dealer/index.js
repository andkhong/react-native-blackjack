import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import cardsPath from './../../png-cards';

function mapStateToProps(state){
    return {
        dealer: state.dealer,
        winner: state.winner
    }
}

function Dealer({dealer, winner }) {
    let dealerCards = dealer.map((item, index) => {
        if (index === 0 && !winner) {
            return <Image source={cardsPath.back} style={styles.images} key={index} />;
        } else {
            return <Image source={cardsPath[item.substr(2)]} style={styles.images} key={index} /> 
        }
    });
    return (
        <View style={styles.container}>
            {dealerCards}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    images: {
        width: 70,
        height: 100
    }
});

export default connect(
    mapStateToProps
)(Dealer);