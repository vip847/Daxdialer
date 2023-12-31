import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Linking,
    Alert,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const url = 'https://revatnetwork.com/crm/assignapi/';
    const isFocused = useIsFocused();

    function login ({data}){
        const accessingUser = data.filter((user)=>user.email===username);
    }

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json)
        .then((json)=>login(json))
    },[isFocused])

    const togglePassword = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const openLink = url => {
        Linking.openURL(url);
    };

    return (
        <SafeAreaView>
            {/* Header */}
            <View id="logo" style={[styles.sectionOne, styles.loginbg]}>
                <View style={styles.appTitle}>
                    <Image
                        source={require('../assests/Logo/logo.png')}
                        style={styles.appTitleLogo}
                    />
                    <Text style={styles.appTitleText}>DaxDialer</Text>
                </View>
            </View>

            {/* Greet */}
            <View>
                <View style={tw`flex mx-auto pt-20 pb-16`}>
                    <View>
                        <Text style={tw`text-4xl font-bold text-black`}>Hi!</Text>
                    </View>
                    <View>
                        <Text style={tw`text-4xl font-bold text-black`}>Welcome</Text>
                    </View>
                    <View>
                        <Text style={tw`text-lg`}>Please enter your credentials</Text>
                    </View>
                </View>
            </View>

            {/* Inputs */}
            <View style={tw`flex mx-auto w-64`}>
                <View style={tw`border-b-2`}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        style={tw`text-lg`}
                        onChangeText={text => setUsername(text)}
                    />
                </View>

                <View style={tw`flex flex-row items-center justify-between border-b-2`}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        secureTextEntry={!isPasswordShown}
                        style={tw`text-lg`}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity onPress={togglePassword}>
                        {
                            isPasswordShown ? 
                                <Ionicons name='eye-outline' size={20} color={'black'} />
                                :
                                <Ionicons name='eye-off-outline' size={20} color={'black'} />
                        }

                    </TouchableOpacity>
                </View>

                <View style={tw`flex items-end mt-2`}>
                    <Text onPress={() => openLink('https://www.google.com')}>
                        Forget Password?
                    </Text>
                </View>

                <View style={tw`mt-4`}>
                    <Button
                        title="Log In"
                        color="#3f3740"
                        style={tw``}
                        onPress={() => Alert.alert('Login Successfull!!')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    loginbg: {
        justifyItems: 'right',
        alignItems: 'flex-end',
        height: 'auto',
    },

    // Header
    sectionOne: {
        height: 100,
    },
    appTitleLogo: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    appTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30,
        marginTop: 70,
    },
    appTitleText: {
        fontFamily: 'monospace',
        fontWeight: '900',
        fontSize: 20,
        color: 'black',
    },
});