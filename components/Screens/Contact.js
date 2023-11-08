import {
    View,
    Text,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    SafeAreaView
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
            <View
                style={tw`w-[100%] h-0 flex-row items-center pl-5`}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image
                        source={require('../images/back.png')}
                        style={{ width: 30, height: 30, tintColor: '#fff' }}
                    />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../images/user.png')}
                style={tw`w-[60px] h-[60px] mt-[50px] self-center`}
            />
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
                <View
                    style={tw`flex-row pr-[15px] items-center`}>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/message.png')}
                            style={tw`h-[24px] w-[24px] mr-5`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../images/call.png')}
                            style={tw`h-[20px] w-[20px]`}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Contact;