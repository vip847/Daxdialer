import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

export default function HistoryScreen({ navigation }) {
    const route = useRoute();
    const [history, setHistory] = React.useState(route.params.data.history);
    const [inputText, setInputText] = React.useState('');
    const HistoryHeader = () => {
        const handleBackPress = () => {
            // Handle back button press (navigate back or any custom logic)
            navigation.goBack();
        };

        const handleHomePress = () => {
            // Handle home button press (navigate to home screen or any custom logic)
            console.log('Navigate to Home');
        };

        const handleMessagePress = () => {
            // Handle message button press (open messages or any custom logic)
            console.log('Open Messages');
        };
        return (
            <View style={tw`h-[60px] bg-white shadow-md justify-between flex-row items-center mb-2`}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons style={tw`pl-4`} name='arrow-back' size={24} color={'black'} />
                </TouchableOpacity>
                <View>
                    <Text style={tw`text-[21px] text-black text-center`}>{route.params.data.name}</Text>
                    <Text style={tw`text-[15px] text-black text-center`}>{route.params.data.company}</Text>
                </View>
                <View style={tw`flex-row`}>
                    <TouchableOpacity onPress={handleHomePress}>
                        <Ionicons style={tw`pr-2`} name='call-outline' size={24} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMessagePress}>
                        <Ionicons style={tw`pr-2`} name='chatbox-outline' size={24} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleMessagePress}>
                        <Ionicons style={tw`pr-2`} name='ellipsis-vertical' size={24} color={'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const HistoryItem = ({ item }) => {
        return (
            <View>
                {
                    item.type === 'task' ?
                        <View style={tw`flex-row bg-white shadow-sm mt-[1px] p-2`}>
                            <MaterialIcons style={[tw`text-[35px] w-[50px] h-[50px] p-[6px] rounded-full text-center bg-red-800`]} name='event-available' size={20} color={'white'} />
                            <View style={tw`w-[85%]`}>
                                <Text style={tw`text-[18px]`}>
                                    You updated Task Reminder Time to {item.Task_Remainder_Time}
                                </Text>
                                <Text style={tw`text-[18px] text-black font-bold`}>
                                    {item.note}
                                </Text>
                                <Text style={tw`text-[18px]`}>
                                    {item.change}
                                </Text>
                            </View>
                        </View>
                        :
                        <View style={tw`flex-row bg-white shadow-sm mt-[1px] p-2`}>
                            <Ionicons style={[tw`text-[35px] w-[50px] h-[50px] p-[6px] rounded-full text-center bg-green-500`]} name='call' size={20} color={'white'} />
                            <View style={tw`w-[85%]`}>
                                <Text style={tw`text-[18px]`}>
                                    You called {route.params.data.name}
                                </Text>
                                <Text style={tw`text-[18px] text-black font-bold`}>
                                    {item.Duration}
                                </Text>
                                <Text style={tw`text-[18px]`}>
                                    {item.time}
                                </Text>
                            </View>
                        </View>
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={tw`flex-1`}>
            <HistoryHeader />
            <FlatList data={history} renderItem={HistoryItem} />
            <KeyboardAvoidingView style={tw`flex-row px-[5px] py-[5px] bg-[#dadada] absolute bottom-0 w-[100%] h-[70px] border-[#ddd] border-t`} >
                <TouchableOpacity style={tw`flex justify-center items-center rounded-full h-[50px] w-[50px] self-center`}>
                    <Ionicons name='add-circle' size={30} color={'black'} style={tw`rounded-full`} />
                </TouchableOpacity>
                <TextInput
                    style={tw`flex-1 h-[50px] text-[22px] bg-white rounded-full px-[10px] self-center`}
                    placeholder="Type a note"
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                />
                <TouchableOpacity style={tw`flex justify-center items-center rounded-full h-[50px] w-[50px] self-center`}>
                    <Ionicons name='send' size={30} color={'black'} style={tw`rounded-full`} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};