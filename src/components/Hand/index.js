import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drawHand } from './../../actions/gambitActions';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import cardsPath from './../../png-cards';

function mapStateToProps(state){
    return {
        hand: state.hand
    }
}

function Hand({ hand }) {
    let handCards = hand.map((item, index) => 
        <Image source={cardsPath[item.substr(2)]} style={styles.images} key={index} />
    );
    return (
        <View style={styles.container}>
            {handCards}
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
)(Hand);