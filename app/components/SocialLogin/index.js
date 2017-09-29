import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SocialIcon } from 'react-native-elements';

import images from './../../config/images.js';
import styles from './styles.js';

class SocialLogin extends Component {

    render() {
        return (
            <View style={styles.socialView}>
                <Text style={{color: 'white', fontSize: 15, textAlign: 'center', marginBottom: 10}}>Create your account using your favorite social network!</Text>
                <View style={styles.socilIcons}>
                    <SocialIcon type='facebook' />
                    <SocialIcon type='twitter' />
                    <SocialIcon type='google-plus' style={{backgroundColor: '#dc4335'}} />
                </View>
            </View>
        );
    }
}

export default SocialLogin;