import React, { useState } from 'react';
import { HomeContent } from '../../assets/Content';
import { Text, View, FlatList, TouchableOpacity, Modal, Linking, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';



export default function CallsScreen() {

    const [isModalVisible, setModalVisible] = React.useState(false);
    
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#',];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCall = () => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    function CallDialer({ visible, onClose}){
        
        
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={tw`flex flex-1 justify-end`}>
                    <View style={tw`bg-white p-4 h-auto rounded-t-3xl`}>
                        {
                            <View style={tw`flex justify-between items-center flex-row`}>
                                <TextInput 
                                    style={tw`text-4xl text-center w-[90%]`}
                                    onChangeText={setPhoneNumber}
                                    value={phoneNumber}
                                    showSoftInputOnFocus={false}
                                />
                                <TouchableOpacity style={tw`w-[10%]`} onPress={() => (setPhoneNumber(phoneNumber.slice(0, -1)))}>
                                    <Ionicons name="backspace-outline" size={30} color={'black'}/>
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={tw`flex flex-row justify-between flex-wrap`}>
                            {numberButtons.map((number) => {
                                return(
                                <TouchableOpacity
                                    key={number}
                                    style={tw`w-1/4 p-2 border-2 border-gray-500 rounded-full m-2`}
                                    onPress={() => setPhoneNumber(phoneNumber + number)}
                                >
                                    <Text style={tw`text-center text-xl`}>{number}</Text>
                                </TouchableOpacity>)
                            })}
                        </View>
                        <TouchableOpacity style={tw`mt-4 self-center bg-green-500 p-2 rounded-full w-1/4`} onPress={handleCall}>
                            <Text style={tw`text-white text-xl text-center font-semibold`}>Call</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>
        )
    };

    const renderCallItem = ({ item }) => {
        return (
            <TouchableOpacity style={tw``} onPress={() => navigation.navigate('Contact', { data: item })}>
                <View style={[tw`flex flex-row items-center bg-white rounded-[1px] p-[10px] mb-[2px] shadow-sm`]}>
                    <View style={tw`flex items-center`}>
                        <Text style={[tw`rounded-full w-[50px] h-[50px] text-center text-black text-[35px]`, { backgroundColor: `${item.color}` }]} >{item.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={tw`pl-2 flex-1 justify-end`}>
                        <Text style={[tw`text-[22px] mb-[5px] text-black w-[75%]`]}>{item.name}</Text>
                        <Text style={tw`text-[15px] flex-1 justify-end`}>{item.time}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setPhoneNumber(item.contact);
                            toggleModal();
                        }}>
                        <Ionicons name='call-outline' size={30} color={'black'} />
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