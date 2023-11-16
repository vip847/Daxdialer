import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function ChatScreen() {
  const route = useRoute();
  const nav = useNavigation();
  const [messages, setMessages] = useState(route.params.data.messages);
  const [inputText, setInputText] = useState('');
  const handleSend = () => {
    if (inputText.trim() !== '') {
      const now = new Date();
      // Get the date components
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // Months are 0-based, so add 1
      const day = now.getDate();

      // Get the time components
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format the date and time as a string
      const currentDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      const newMessage = {
        time: currentDateTime,
        message: inputText.trim(),
        mode: 'sent',
      };
      setMessages([...messages, newMessage]);
      route.params.data.messages.push(newMessage);
      setInputText('');
    }
  };

  const ChatHeader = () => {
    return (
      <View style={tw`h-[60px] bg-white shadow-md flex flex-row items-center mb-3`}>
        <TouchableOpacity style={tw`rounded-full`} onPress={() => nav.goBack()} >
          <Ionicons style={tw`pl-4`} name='arrow-back' size={24} color={'black'} />
        </TouchableOpacity>
        <Text style={tw`pl-6 font-medium text-black text-[20px]`}>{route.params.data.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ChatHeader />
      <ScrollView>
        {messages.map((message, key) => (
          <View key={key} style={tw`w-[85%] ml-2 bg-[#dadada88] rounded-xl p-[10px] mb-[10px]`}>
            <Text style={tw`text-gray-700 text-[14px] mb-2`}>{message.mode==='sent'? 'you':route.params.data.name}</Text>
            <Text style={tw`text-[20px] text-gray-900`}>{message.message}</Text>
            <Text style={tw`font-light text-xs text-gray-700 text-right pt-1`}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView style={tw`flex-row px-[10px] py-[5px] bg-[#dadada] absolute bottom-0 w-[100%] h-[70px] border-[#ddd] border-t`} >
        <TextInput
          style={tw`flex-1 h-[50px] text-[22px] bg-white rounded-full px-[10px] self-center`}
          placeholder="Type your message..."
          onChangeText={(text) => setInputText(text)}
          value={inputText}
        />
        <TouchableOpacity style={tw`flex justify-center items-center ml-[10px] bg-gray-500 rounded-full h-[50px] w-[50px] self-center`} onPress={handleSend}>
          <Ionicons name='send' size={30} color={'white'} style={tw`rounded-full`} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};