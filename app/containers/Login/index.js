import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import images from './../../config/images.js';
import commonStyle from './../../config/styles.js';
import styles from './styles';

class Login extends Component {

    gotoScene = (key) => {
        Actions[key].call();
    }
    render() {
        return (
            <Image source={images.background} resizeMode="cover" style={commonStyle.backgroundImage}>
                <View style={commonStyle.overlay}>
                    <View style={commonStyle.content}>
                        <View style={styles.content}>
                            <Image source={images.logo} style={commonStyle.logoImage} />
                        </View>
                        <View style={styles.content}>
                            <View style={commonStyle.inputView}>
                                <TextInput style={commonStyle.textInput} placeholder="User Name" placeholderTextColor="#afb1b3" />
                            </View>
                            <View style={commonStyle.inputView}>
                                <TextInput style={commonStyle.textInput} placeholder="PassWord" placeholderTextColor="#afb1b3" secureTextEntry={true} />
                            </View>
                            <TouchableOpacity style={commonStyle.buttonView} onPress={() => this.gotoScene('home')}>
                                <Text style={commonStyle.buttonText}>Log In</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row', padding: 5, margin: 5}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 12, backgroundColor: 'rgba(0,0,0,0)', color: '#20d471'}}>forgot password?</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize: 12, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>&nbsp;&nbsp;or&nbsp;&nbsp;</Text>
                                <TouchableOpacity onPress={() => this.gotoScene('signup')}>
                                    <Text style={{fontSize: 12, backgroundColor: 'rgba(0,0,0,0)', color: '#20d471'}}>Register?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={commonStyle.footer}>
                        <Text style={commonStyle.footerText}>Copyright &copy; 2017</Text>
                    </View>
                </View>
            </Image>
        );
    }
}

export default Login;