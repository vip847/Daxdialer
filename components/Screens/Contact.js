import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const Contact = ({ navigation }) => {
    const route = useRoute();

    const ContactHeader = () => {
        return (
            <View style={tw`h-[60px] bg-white shadow-md flex flex-row items-center mb-3`}>
                <TouchableOpacity style={tw`rounded-full`} onPress={() => navigation.goBack()} >
                    <Ionicons style={tw`pl-4`} name='arrow-back' size={24} color={'black'} />
                </TouchableOpacity>
                <Text style={tw`pl-6 font-medium text-black text-[20px]`}>{route.params.data.name}</Text>
            </View>
        )
    }

    return (
        <View style={tw`flex-1 bg-white`}>
            <ContactHeader />
            <Ionicons name='person' size={100} color={'black'} style={tw`bg-gray-300 rounded-full p-3 self-center`} />
            <Text style={tw`self-center mt-5 text-[25px]`}>
                {route.params.data.name}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 60,
                    marginTop: 50,
                }}>
                <Text
                    style={tw`self-center mt-5 ml-5 text-[20px]`}>
                    {route.params.data.contact}
                </Text>
                <View style={tw`flex-row pr-[15px] items-center`} >
                    <TouchableOpacity style={tw`mr-2`} >
                    <Ionicons name='chatbox-outline' size={25} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`mr-1`} >
                    <Ionicons name='call-outline' size={25} color={'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Contact;