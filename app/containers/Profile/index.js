import React, { Component } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Avatar, CheckBox, Slider } from 'react-native-elements';

import images from './../../config/images.js';
import commonStyle from './../../config/styles.js';
import styles from './styles.js';

const avatarIcon = {
    name: 'camera', 
    color: '#20d471', 
    type: 'simple-line-icon'
}

class Profile extends Component {

    constructor(){
        super();
        this.state = {
            gender: [false, false, false],
            age: [false, false, false],
            training: [false, false],
            interest: [false, false, false, false]
        }
    }
    selectGender = (index) => {
        let temp = [false, false, false];
        temp[index] = true;
        this.setState({ gender: temp});
    }
    selectAge = (index) => {
        let temp = [false, false, false];
        temp[index] = true;
        this.setState({ age: temp});
    }
    selectTraining = (index) => {
        let temp = [false, false];
        temp[index] = true;
        this.setState({ training: temp });
    }
    selectInterest = (index) => {
        let temp = this.state.interest;
        temp[index] = !temp[index];
        this.setState({ interest: temp });
    }
    gotoHome = () => {
        Actions.home();
    }
    render() {
        return (
            <Image source={images.background} resizeMode="cover" style={commonStyle.backgroundImage}>
                <View style={commonStyle.overlay}>
                    <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false}>
                        <Text style={styles.headerText}>Please complete your profile</Text>
                        <Avatar large rounded icon={avatarIcon} overlayContainerStyle={styles.avatarView} component={TouchableOpacity} containerStyle={{marginBottom: 20}} />
                        <View style={styles.formElement}>
                            <Text style={styles.title}>FULL NAME</Text>
                            <TextInput style={styles.fieldText} placeholder="Your Name" placeholderTextColor="white" />
                        </View>
                        <View style={styles.formElement}>
                            <Text style={styles.title}>CITY</Text>
                            <TextInput style={styles.fieldText} placeholder="Your City" placeholderTextColor="white" />
                        </View>
                        <View style={styles.formElement}>
                            <Text style={styles.title}>ADDRESS</Text>
                            <TextInput style={styles.fieldText} placeholder="" placeholderTextColor="white" />
                        </View>
                        {/* Select Gender  */}
                        <View style={styles.formElement}>
                            <Text style={styles.title}>GENDER</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <CheckBox title="Male" checkedIcon="symbol-male" uncheckedIcon="symbol-male" 
                                    checkedColor="#20d471" iconType="simple-line-icon" checked={this.state.gender[0]} 
                                    onPress={() => this.selectGender(0)} 
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="Female" checkedIcon="symbol-female" uncheckedIcon="symbol-female" 
                                    checkedColor="#20d471" iconType="simple-line-icon" checked={this.state.gender[1]} 
                                    onPress={() => this.selectGender(1)}
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="Other" checkedIcon="mars-stroke" uncheckedIcon="mars-stroke" 
                                    checkedColor="#20d471" checked={this.state.gender[2]} 
                                    onPress={() => this.selectGender(2)}
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                            </View>
                        </View>
                        {/* Select Age */}
                        <View style={styles.formElement}>
                            <Text style={styles.title}>AGE</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <CheckBox title="18-25" checkedIcon="circle" uncheckedIcon="circle-thin" 
                                    checkedColor="#20d471" checked={this.state.age[0]} 
                                    onPress={() => this.selectAge(0)} 
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="26-30" checkedIcon="circle" uncheckedIcon="circle-thin" 
                                    checkedColor="#20d471" checked={this.state.age[1]} 
                                    onPress={() => this.selectAge(1)}
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="Other" checkedIcon="circle" uncheckedIcon="circle-thin" 
                                    checkedColor="#20d471" checked={this.state.age[2]} 
                                    onPress={() => this.selectAge(2)}
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                            </View>
                        </View>
                        {/* Training preferences */}
                        <View style={styles.formElement}>
                            <Text style={styles.title}>TRAINING PREFERENCES</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <CheckBox title="Partner/Buddy" checkedIcon="ios-person" uncheckedIcon="ios-person-outline" 
                                    checkedColor="#20d471" iconType="ionicon" checked={this.state.training[0]} 
                                    onPress={() => this.selectTraining(0)}
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="Group" checkedIcon="ios-people" uncheckedIcon="ios-people-outline" 
                                    checkedColor="#20d471" iconType="ionicon" checked={this.state.training[1]} 
                                    onPress={() => this.selectTraining(1)}
                                    containerStyle={styles.checkbox}
                                    textStyle={{color: 'white'}} />
                            </View>
                        </View>
                        {/* Interests */}
                        <View style={[styles.formElement, {borderBottomWidth: 0}]}>
                            <Text style={styles.title}>INTERESTS</Text>
                            <View style={{flexDirection: 'row', marginBottom: 10}}>
                                <CheckBox title="Body Building" checkedIcon="ios-body" uncheckedIcon="ios-body-outline" 
                                    checkedColor="#20d471" iconType="ionicon" checked={this.state.interest[0]} 
                                    onPress={() => this.selectInterest(0)}
                                    containerStyle={[styles.checkbox, {width: '50%'}]}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="Running" checkedIcon="directions-run" uncheckedIcon="directions-run" 
                                    checkedColor="#20d471" iconType="material" checked={this.state.interest[1]} 
                                    onPress={() => this.selectInterest(1)}
                                    containerStyle={[styles.checkbox, {width: '50%'}]}
                                    textStyle={{color: 'white'}} />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <CheckBox title="Crossfit" checkedIcon="fitness-center" uncheckedIcon="fitness-center" 
                                    checkedColor="#20d471" iconType="material" checked={this.state.interest[2]} 
                                    onPress={() => this.selectInterest(2)}
                                    containerStyle={[styles.checkbox, {width: '50%'}]}
                                    textStyle={{color: 'white'}} />
                                <CheckBox title="Etc." checkedIcon="more-horiz" uncheckedIcon="more-horiz" 
                                    checkedColor="#20d471" iconType="material" checked={this.state.interest[3]} 
                                    onPress={() => this.selectInterest(3)}
                                    containerStyle={[styles.checkbox, {width: '50%'}]}
                                    textStyle={{color: 'white'}} />
                            </View>
                        </View>
                        {/* WorkTime */}
                        <View style={[styles.formElement, {borderBottomWidth: 0}]}>
                            <Text style={styles.title}>PREFERRED WORKOUT TIME</Text>
                            <Slider value={this.state.worktime}
                                minimumValue = {0} maximumValue = {180} step =  {5}
                                minimumTrackTintColor='#20d471' maximumTrackTintColor='#494d52'
                                thumbTouchSize = {{width: 20, height: 20}}
                                trackStyle={{height: 10, borderRadius: 10}} thumbStyle={{backgroundColor: 'white', marginTop: 3}} />

                        </View>
                        <TouchableOpacity style={[commonStyle.buttonView, {marginBottom: 40}]} onPress={this.gotoHome}>
                            <Text style={commonStyle.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <View style={commonStyle.footer}>
                            <Text style={commonStyle.footerText}>Copyright &copy; 2017</Text>
                        </View>
                    </ScrollView>
                </View>
            </Image>
        );
    }
}

export default Profile;