import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeContent, UserAccount } from '../../assets/Content';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const HL = () => {
    return <View style={tw`border-b border-b-gray-200 my-1`} />;
};

const ContactCard = ({item, navigation}) => (
    <TouchableOpacity onPress={() => navigation.navigate('History', { data: item })} style={tw`flex-row bg-white shadow-sm mt-[1px] p-2`}>
        <Text style={[tw`text-[35px] w-[50px] h-[50px] rounded-full text-center`,{backgroundColor: `${item.color}`}]}>{item.name[0].toUpperCase()}</Text>
        <View style={tw`w-full pl-3`}>
            <Text style={tw`shadow-sm`}>
                <Text style={tw`font-bold text-black text-[22px]`} >{item.name}</Text>{'\n'}
                <Text style={tw`bg-blue-100 `}>{item.interest}</Text>
            </Text>
            <HL />
            <Text style={tw`text-black text-[20px] w-[85%]`} >{item.event}</Text>
            <Text style={tw``} >{item.time}</Text>
            <HL/>
            <View style={tw` flex-1 flex-row w-[85%] items-center h-8`}>
                <TouchableOpacity style={tw`flex-1 flex-row justify-center`}>
                    <Ionicons name='call-outline' size={25} color={'grey'} />
                    <Text style={tw`pl-2 text-[20px]`}>Calls</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 flex-row justify-center`}>
                    <Ionicons name='chatbox-outline' size={25} color={'grey'} />
                    <Text style={tw`pl-2 text-[20px]`}>SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 flex-row justify-center`}>
                    <FontAwesome name='calendar-plus-o' size={20} color={'grey'} />
                    <Text style={tw`pl-2 text-[20px]`}>Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
);

const UserCard = UserAccount.filter((user, key) => user.status === 'LoggedIn')
const UserShow = UserCard.map((user, key) => 
    <View key={key} style={tw`flex items-center flex-row bg-white shadow-sm mt-[1px] p-2`}>
        <View style={tw`flex items-center`}>
            <Text style={[tw`text-[35px] text-center w-[50px] h-[50px] rounded-full`,{backgroundColor: `${user.color}`}]}>{user.name[0].toUpperCase()}</Text>
        </View>
        <View style={tw`pl-3 w-[85%]`}>
            <Text style={tw`text-[20px]`}>Hello {user.name}! <Text style={tw`text-black`}>{HomeContent.length} Tasks</Text> to rewiew </Text>
        </View>
    </View>
);

export default function HomeScreen(){
    const navigation = useNavigation();

    return(
        <View style={tw`flex-1`}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                {UserShow}
                {HomeContent.map((post, key) => <ContactCard key={key} item={post} navigation={navigation} />)}
            </ScrollView>
        </View>
    )
}