import React, { useState } from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const route = useRoute();
  const nav = useNavigation();
  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: inputText.trim(),
        sender: route.params.data.sender,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const ChatHeader = () => {
    return(
      <View style={tw`h-[60px] bg-white shadow-md flex flex-row items-center mb-3`}>
        <TouchableOpacity style={tw`rounded-full`} onPress={()=>nav.goBack()} >
          <Ionicons style={tw`pl-4`} name='arrow-back' size={24} color={'black'} />
        </TouchableOpacity>
        <Text style={tw`pl-6 font-medium text-black text-[20px]`}>{route.params.data.sender}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ChatHeader />
      <ScrollView>
        {messages.map((message) => (
          <View key={message.id} style={tw`w-[85%] ml-2 bg-gray-300 rounded-xl p-[10px] mb-[10px]`}>
            <Text style={tw`text-gray-700 text-[14px] mb-2`}>{message.sender}</Text>
            <Text style={tw`text-[18px] text-gray-900`}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView style={tw`flex-row px-[10px] py-[5px] bg-[#c9c9c9] absolute bottom-0 w-[100%] h-[60px] border-[#ddd] border-t`} >
        <TextInput
          style={tw`flex-1 h-[45px] text-[20px] bg-white rounded-full px-[10px]`}
          placeholder="Type your message..."
          onChangeText={(text) => setInputText(text)}
          value={inputText}
        />
        <TouchableOpacity style={tw`justify-center items-center ml-[10px] bg-gray-700 rounded-full p-[10px] h-[45px]`} onPress={handleSend}>
          <Text style={tw`text-[18px] text-white`}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};