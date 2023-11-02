import { React } from "react";
import { View, Image, Text } from 'react-native';
import tw from 'twrnc';

export default function LoadingPage(){
    return(
        <View style={tw`flex flex-1 items-center justify-center`}>
            <Image source={require('../assets/Logo/logo.png')} />
            <Text style={tw`font-bold text-black text-[30px]`}>DaxDialer</Text>
        </View>
    )
}