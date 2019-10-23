import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBDMG6WPO9Zcbu3muE7yrCM_swaCCs-lsA",
            authDomain: "manager-react-native-7343f.firebaseapp.com",
            databaseURL: "https://manager-react-native-7343f.firebaseio.com",
            projectId: "manager-react-native-7343f",
            storageBucket: "manager-react-native-7343f.appspot.com",
            messagingSenderId: "522950629449",
            appId: "1:522950629449:web:eeecd582d7182b76334798"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;