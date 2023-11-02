import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MessageContent, randomColor } from '../../assets/Content';
import tw from 'twrnc';

export default function MessagesScreen() {
    const navigation = useNavigation();
    const renderChatItem = ({ item }) => {
        return (
            <TouchableOpacity style={tw``} onPress={() => navigation.navigate('ChatScreen', { data: item })}>
                <View style={[tw`flex flex-row items-center bg-white rounded-[1px] p-[10px] mb-[2px] shadow-sm`]}>
                    <View style={tw`flex items-center`}>
                        <Text style={[tw`rounded-full w-[50px] h-[50px] text-center text-black text-[35px]`,{backgroundColor: `${randomColor()}`}]} >{item.sender[0].toUpperCase()}</Text>
                    </View>
                    <View style={tw`pl-2 flex-1 justify-end`}>
                        <View style={tw`flex flex-1 flex-row items-center justify-end`}>
                            <Text style={[tw`text-[22px] mb-[5px] text-black w-[75%]`]}>{item.sender}</Text>
                            <Text style={tw`text-[15px] flex-1 justify-end`}>{item.time}</Text>
                        </View>
                        <Text style={styles.message}>{item.message}</Text>

                    </View>
                </View>
                <View style={styles.separator} />
            </TouchableOpacity>
        )
    };
    return (
        <FlatList
            data={MessageContent}
            renderItem={renderChatItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    message: {
        fontSize: 18,
        color: '#333',
    },
    time: {
        padding: 3,
        text: 'right'
    },
    separator: {
        height: 2,
        backgroundColor: '#ccc',
    },
});
