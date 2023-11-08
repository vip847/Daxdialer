import React, { useState } from 'react';
import { HomeContent, randomColor } from '../../assets/Content';
import CallDialer from "./CallDialer";
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';



export default function CallsScreen() {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCall = (number) => {
        Linking.openURL(`tel:${number}`);
    };

    const renderCallItem = ({ item }) => {
        return (
            <TouchableOpacity style={tw``} onPress={() => navigation.navigate('Contact', { data: item })}>
                <View style={[tw`flex flex-row items-center bg-white rounded-[1px] p-[10px] mb-[2px] shadow-sm`]}>
                    <View style={tw`flex items-center`}>
                        <Text style={[tw`rounded-full w-[50px] h-[50px] text-center text-black text-[35px]`, { backgroundColor: `${randomColor()}` }]} >{item.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={tw`pl-2 flex-1 justify-end`}>
                        <Text style={[tw`text-[22px] mb-[5px] text-black w-[75%]`]}>{item.name}</Text>
                        <Text style={tw`text-[15px] flex-1 justify-end`}>{item.time}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            const url = Communications.text(
                                item.contact,
                            );
                        }}>
                        <Ionicons name='call' size={30} color={'black'} />
                    </TouchableOpacity>
                </View>
                <View style={tw`h-[2px] bg-[#ccc]`} />
            </TouchableOpacity>
        )
    };

    return (
        <View style={tw`w-[100%] h-[100%]`}>
            <FlatList
                data={HomeContent}
                showsVerticalScrollIndicator={false}
                renderItem={renderCallItem} />
            <View style={tw`absolute rounded-full bg-black bottom-[20px] right-1 h-[60px] w-[60px] justify-center items-center`}>
                <TouchableOpacity onPress={toggleModal}>
                    <Ionicons name="keypad" size={40} color={'white'} />
                </TouchableOpacity>
            </View>
            <CallDialer visible={isModalVisible} onClose={toggleModal} />
        </View>
    )
}