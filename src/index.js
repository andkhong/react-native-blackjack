import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store/';

import Table from './components/Table/';

function App() {
    return (
            <View style={styles.container}>
                <View style={styles.centerText}>
                    <Table />
                </View>
            </View>
    );
}

function providedApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    centerText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default providedApp;