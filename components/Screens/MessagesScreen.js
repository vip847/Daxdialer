import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeContent } from '../../assets/Content';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function MessagesScreen() {
    const navigation = useNavigation();
    const renderChatItem = ({ item }) => {
        return (
            <TouchableOpacity style={tw``} onPress={() => navigation.navigate('ChatScreen', { data: item })}>
                <View style={[tw`flex flex-row items-center bg-white rounded-[1px] p-[10px] mb-[2px] shadow-sm`]}>
                    <View style={tw`flex items-center`}>
                        <Text style={[tw`rounded-full w-[50px] h-[50px] text-center text-black text-[35px]`,{backgroundColor: `${item.color}`}]} >{item.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={tw`pl-2 flex-1 justify-end`}>
                        <View style={tw`flex flex-1 flex-row items-center justify-end`}>
                            <Text style={[tw`text-[22px] mb-[5px] text-black w-[75%]`]}>{item.name}</Text>
                            <Text style={tw`text-[15px] flex-1 justify-end`}>{item.messages[item.messages.length - 1].time}</Text>
                        </View>
                        <Text style={tw`text-[18px] text-[#333]`}>
                            {
                                item.messages[item.messages.length - 1].mode === 'sent' ?
                                    <Ionicons name='checkmark-done' color={'black'} size={20} style={tw`self-center pt-2 mr-[6px]`} />:null
                                
                            }
                            {item.messages[item.messages.length - 1].message}
                        </Text>

                    </View>
                </View>
                <View style={tw`h-[2px] bg-[#ccc]`} />
            </TouchableOpacity>
        )
    };
    return (
        <FlatList
            data={HomeContent}
            renderItem={renderChatItem}
            keyExtractor={(key)=>{key}}
        />
    )
}