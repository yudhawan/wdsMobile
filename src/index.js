import { View, Text, TouchableOpacity } from 'react-native'
import {ColorSwatchIcon,CreditCardIcon,FingerPrintIcon,LinkIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import React from 'react'
const Main = ({navigation}) => {
  return (
    <View className="bg-violet-50 p-6 h-full flex-col space-y-4">
      <View className="flex-row justify-between items-end">
        <Text className="text-xl font-bold text-gray-500 ">Wiedersehen</Text>
        <View className="flex-row space-x-1 items-center">
          <LinkIcon color={'gray'} size={15} />
          <Text className="text-sm font-bold text-slate-500">WatchDS</Text>
        </View>
      </View>
      <View className="w-full h-full flex-row flex-wrap gap-5 justify-center">
        <TouchableOpacity className="w-40 h-20 bg-blue-200 rounded-xl p-2 flex-col space-y-1 items-center justify-center" onPress={()=>navigation.navigate('Watch')}>
          <ColorSwatchIcon color={'#4576bf'} size={40} />
          <Text className="text-xs text-biru font-semibold ">Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-40 h-20 bg-red-200 rounded-xl p-2 flex-col space-y-1 items-center justify-center" onPress={()=>navigation.navigate('Heart')}>
          <HeartIcon color={'#bf4549'} size={40} />
          <Text className="text-xs text-merah font-semibold ">Heart Pulse</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-40 h-20 bg-orange-200 rounded-xl p-2 flex-col space-y-1 items-center justify-center" onPress={()=>navigation.navigate('Rfid')}>
          <CreditCardIcon color={'#bf7645'} size={40} />
          <Text className="text-xs text-oranye font-semibold ">RFID</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-40 h-20 bg-green-200 rounded-xl p-2 flex-col space-y-1 items-center justify-center" onPress={()=>navigation.navigate('Finger')}>
          <FingerPrintIcon color={'#47bf45'} size={40} />
          <Text className="text-xs text-hijau font-semibold ">Finger</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main