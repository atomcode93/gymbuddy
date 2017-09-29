import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Hr from 'react-native-hr';

import SocialLogin from './../../components/SocialLogin';

import images from './../../config/images.js';
import commonStyle from './../../config/styles.js';
import styles from './styles.js';

class SignUp extends Component {

    gotoScene = (key) => {
        Actions[key].call();
    }
    render() {
        return (
            <Image source={images.background} resizeMode="cover" style={commonStyle.backgroundImage}>
                <View style={commonStyle.overlay}>
                    <View style={[commonStyle.content, {paddingTop: 40, paddingBottom: 10}]}>
                        <Image source={images.logo} style={commonStyle.logoImage} />
                        <SocialLogin />
                        <View style={styles.lineWithText}>
                            <Hr lineColor='#828589' text='or' textColor='white' />
                        </View>
                        <View>
                            <Text style={{fontSize: 15, textAlign: 'center', color: 'white', marginBottom: 10}}>Sign up using email</Text>
                            <View style={commonStyle.inputView}>
                                <TextInput style={commonStyle.textInput} placeholder="User Name" placeholderTextColor="#afb1b3" />
                            </View>
                            <View style={commonStyle.inputView}>
                                <TextInput style={commonStyle.textInput} placeholder="PassWord" placeholderTextColor="#afb1b3" />
                            </View>
                            <View style={commonStyle.inputView}>
                                <TextInput style={commonStyle.textInput} placeholder="Email" placeholderTextColor="#afb1b3" />
                            </View>
                            <TouchableOpacity style={commonStyle.buttonView} onPress={() => this.gotoScene('profile')}>
                                <Text style={commonStyle.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', justifyContent: 'center', padding: 5, margin: 5}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: 12, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>have already account?</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize: 12, backgroundColor: 'rgba(0,0,0,0)', color: 'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                <TouchableOpacity onPress={() => this.gotoScene('login')}>
                                    <Text style={{fontSize: 12, backgroundColor: 'rgba(0,0,0,0)', color: '#20d471'}}>Log in</Text>
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

export default SignUp;