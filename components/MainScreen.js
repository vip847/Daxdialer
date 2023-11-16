import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

import { UserAccount } from '../assets/Content';

import LoadingPage from './LoadingPage';
import HomeScreen from './Screens/HomeScreen';
import HistoryScreen from './Screens/HistoryScreen';
import CallsScreen from './Screens/CallsScreen';
import MessagesScreen from './Screens/MessagesScreen';
import ChatScreen from './Screens/ChatScreen';
import ContactsScreen from './Screens/ContactsScreen';
import Contact from './Screens/Contact';
import Dashboard from './Screens/Dashboard';

const home = 'Home';
const calls = 'Calls';
const messages = 'Messages';
const contacts = 'Contacts';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Loading = createStackNavigator();

function TabScreen() {
    const nav = useNavigation();
    const CustomTabHeader = ({ title }) => {
        return (
            <View style={tw`flex items-center p-[10px] bg-white shadow-gray-400 shadow-md h-[60px] flex-row`}>
                <Ionicons name='menu' size={30} color={'black'} onPress={() => nav.openDrawer()} />
                <Text style={tw`text-black text-[22px] pl-[30px]`}>{title}</Text>
                <View style={tw`flex-row absolute right-0 pt-[10px] pr-2`}>
                    <Ionicons style={tw``} name='search' size={30} color={'black'} />
                    <Ionicons style={tw`pl-[10px]`} name='ellipsis-vertical' size={30} color={'black'} />
                </View>
            </View>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName={home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === home) {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === calls) {
                        iconName = focused ? 'call' : 'call-outline';
                    }
                    else if (route.name === messages) {
                        iconName = focused ? 'chatbox' : 'chatbox-outline';
                    }
                    else if (route.name === contacts) {
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    return <Ionicons name={iconName} size={35} color={color} />
                },
                tabBarLabelStyle: { fontSize: 15 },
                header: () => {
                    return <CustomTabHeader title={route.name} />
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                //headerShown: false,
                //tabBarShowLabel: false,
                tabBarStyle: { paddingBottom: 10, height: 75, backgroundColor: 'black' },
            })}
        >
            <Tab.Screen name={home} component={HomeScreen} />
            <Tab.Screen name={calls} component={CallsScreen} />
            <Tab.Screen name={messages} component={MessagesScreen} />
            <Tab.Screen name={contacts} component={ContactsScreen} />
        </Tab.Navigator>
    );
}

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabScreen" component={TabScreen} options={() => ({ headerShown: false })} />
            <Stack.Screen name="History" component={HistoryScreen} options={() => ({ headerShown: false })} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={() => ({ headerShown: false })} />
            <Stack.Screen name="Contact" component={Contact} options={() => ({ headerShown: false })} />
        </Stack.Navigator>
    )
}

function DrawerButton() {
    const navigation = useNavigation();
    const UserCard = UserAccount.filter((user, key) => user.status === 'LoggedIn');
    const CustomDrawer = (props) => {
        const UserShow = UserCard.map((user, key) =>
            <View key={key} >
                <TouchableOpacity key={key} style={tw`flex items-center flex-row bg-white shadow-sm mt-[1px] p-2`} onPress={()=> navigation.navigate('Dashboard',{data:user})} >
                    <View style={tw`flex items-center`}>
                        <Text style={[tw`text-[35px] text-center w-[50px] h-[50px] rounded-full`, { backgroundColor: `${user.color}` }]}>{user.name[0].toUpperCase()}</Text>
                    </View>
                    <View style={tw`pl-3 w-[82%]`}>
                        <Text style={tw`text-[20px]`}>{user.name}</Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`m-2`}>
                    <View style={tw`flex flex-row items-center`}>
                        <Ionicons name='mail' size={18} />
                        <Text style={tw`text-[18px] pl-2`}>{user.email}</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <FontAwesome name='briefcase' size={18} />
                        <Text style={tw`text-[18px] pl-2`}>{user.company}</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <FontAwesome name='user' size={18} />
                        <Text style={tw`text-[18px] pl-2`}>{user.vendor}</Text>
                    </View>
                </View>
            </View>
        );
        return (
            <DrawerContentScrollView {...props} >
                {UserShow}
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator
            initialRouteName='Dialer'
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={() => ({
                drawerActiveTintColor: 'black',
                drawerInactiveTintColor: 'grey',
            })}
        >
            <Drawer.Screen name="Dialer" component={StackNav} options={() => ({ headerShown: false })} />
            <Drawer.Screen name="Dashboard" component={Dashboard} />
        </Drawer.Navigator>
    )
}

function LoadingStack (){

}

export default function MainScreen() {
    const [loading, isLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            isLoading(false); // Navigate to the next screen
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);

    if(loading){
        return (<LoadingPage/>)
    }

    return (
        <DrawerButton />
    );
}