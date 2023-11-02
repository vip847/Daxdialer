import { React } from "react";
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'
import tw from 'twrnc';
export default function Dashboard() {
    const route = useRoute();
    return (
        <View>
            <View style={tw`flex items-center pt-4`}>
                <Text style={[tw`text-[100px] text-center w-[150px] h-[150px] rounded-full`, { backgroundColor: `${route.params.data.color}` }]}>{route.params.data.name[0].toUpperCase()}</Text>
                <Text style={tw`text-[30px]`}>{route.params.data.name}</Text>
            </View>
            <View style={tw`p-4`}>
                <View style={tw`flex-row`} >
                    <Text style={tw` text-[20px] w-[30%]`} >Email:</Text>
                    <Text style={tw`text-[20px]`} >{route.params.data.email}</Text>
                </View>
                <View style={tw`flex-row`} >
                    <Text style={tw`text-[20px] w-[30%]`} >Company:</Text>
                    <Text style={tw`text-[20px]`} >{route.params.data.company}</Text>
                </View>
                <View style={tw`flex-row`} >
                    <Text style={tw`text-[20px] w-[30%]`} >Vendor:</Text>
                    <Text style={tw`text-[20px]`} >{route.params.data.vendor}</Text>
                </View>
            </View>
        </View>
    )
}