import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Linking, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function CallDialer({ visible, onClose}){
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const handleCall = () => {
        Linking.openURL(`tel:${phoneNumber}`);
    };
    const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#',];
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
                            <Text style={tw`h-10 my-1 text-4xl text-center w-[90%]`}>{phoneNumber}</Text>
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

//homescreen

function Dialer({ setisLoggedin }) {
    useEffect(() => {

    }, [])
    const [isModalVisible, setModalVisible] = React.useState(false);

    const logout = async () => {
        await AsyncStorage.clear()
        setisLoggedin(false)
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCall = (number) => {
        Linking.openURL(`tel:${number}`);
    };
    return (
        <View>
            <View style={tw`absolute bottom-[50px] right-4`}>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={tw`flex-1 `}>
                        <Ionicons name="keypad" size={50} color={'black'} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* <Button onPress={logout} title="logout"/>
            <FlatList
            style={`wtw-full px-5`}
            data={[1,2,3,4,6,7,8,9,0,6,7,5,4,34,4]}
            renderItem={(item)=>{
            return(
                <View style={`ftwlex flex-row justify-between item-center bg-slate-200 my-2 p-3`}>
                    <View>
                        <Text>Varun Sharma</Text>
                        <Text>1223456789</Text>
                        <Text>Nagpur</Text>
                    </View> 
                    <TouchableOpacity onPress={toggleModal}>
                        <phoneIcon strokeWidth={3} color ='green'/>
                    </TouchableOpacity>

                </View>
            )
            }}
            /> 
            <View style={tw`bg-slate-400 flex justify-center items-center px-1`}>
                <Dialer visible={isModalVisible} onClose={toggleModal} />
            </View>*/}
        </View>
    );
}