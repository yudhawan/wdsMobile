import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import {LinkIcon,ChevronRightIcon} from 'react-native-heroicons/outline'
import React from 'react'

const Watch = () => {
  return (
    <View className="bg-blue-50 w-full h-full p-6 flex-col items-center">
        <View className="border-2 border-biru rounded-full w-40 h-40 p-2 items-center justify-center flex-col">
            <Text className="text-biru text-lg font-semibold">Connected</Text>
        </View>
        <View className="flex-row space-x-1 bg-blue-200 rounded-md px-1">
            <LinkIcon color={'gray'} size={15} />
            <Text className="text-gray-500 font-semibold">WatchDS</Text>
        </View>
        <Text className="text-gray-400 text-xs">Battery (75%)</Text>
        <ScrollView className="mt-2 w-full px-6 space-y-4">
            <TouchableOpacity className="flex-row space-x-2 w-full justify-between items-end border-b border-gray-400 py-1">
                <Text className="text-sm text-gray-600">Language</Text>
                <View className="flex-row space-x-1">
                    <Text className="text-xs text-gray-400">English</Text>
                    <ChevronRightIcon color={'blue'} size={15} />
                </View>
            </TouchableOpacity>
            <View className="flex-row space-x-2 w-full justify-between items-end border-b border-gray-400 py-1">
                <Text className="text-sm text-gray-600">Version</Text>
                <Text className="text-xs text-gray-400">v0.01</Text>
            </View>
            <Text className="text-gray-500 font-semibold bg-blue-200 px-1 rounded-md text-center text-xs py-1">Update Avaliable(v0.02)</Text>
        </ScrollView>
    </View>
  )
}

export default Watch