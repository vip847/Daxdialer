import {
    View,
    Text,
    PermissionsAndroid,
    FlatList,
    Image,
    TouchableOpacity,
    Linking,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { ContactContent, randomColor } from '../../assets/Content';
import tw from 'twrnc';

const Contact = ({ navigation }) => {
    const [contactList, setContactList] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        getPermission();
    }, [isFocused]);
    const getPermission = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        }).then(res => {
            if (res == 'granted') {
                Contact.getAll()
                    .then(con => {
                        // work with contacts
                        console.log(con);
                        setContactList(con);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        });
    };

    const renderContactItem = ({ item }) => {
        return (
            <TouchableOpacity style={tw``} onPress={() => navigation.navigate('Contact', { data: item })}>
                <View style={[tw`flex flex-row items-center bg-white rounded-[1px] p-[10px] mb-[2px] shadow-sm`]}>
                    <View style={tw`flex items-center`}>
                        <Text style={[tw`rounded-full w-[50px] h-[50px] text-center text-black text-[35px]`, { backgroundColor: `${randomColor()}` }]} >{item.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={tw`pl-2 flex-1 justify-end`}>
                        <Text style={[tw`text-[22px] mb-[5px] text-black w-[75%]`]}>{item.name}</Text>
                        <Text style={tw`text-[15px] flex-1 justify-end`}>{item.contact}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            const url = Communications.text(
                                item.contact,
                            );
                        }}>
                        <Image
                            source={require('../images/message.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: '#000',
                                marginRight: 20,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(`tel:${item.contact}`);
                        }}>
                        <Image
                            source={require('../images/call.png')}
                            style={{ width: 20, height: 20, tintColor: '#000' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={tw`h-[2px] bg-[#ccc]`} />
            </TouchableOpacity>
        )
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={ContactContent}
                renderItem={renderContactItem}
            />
        </View>
    );
};

export default Contact;