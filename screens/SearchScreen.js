import { View, Text, Dimensions, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-web'

const {width, height} = Dimensions.get('window')

export default function SearchScreen() {

  const navigation = useNavigation()
  const [results, setResults] = useState([])
  let movieName = 'Ant-Man an the Wasp: Quantumania'

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder='Search Movie'
          placeholderTextColor={'lightgray'}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size={25} color='white' />

        </TouchableOpacity>
      </View>

      {/* results */}

      {
        results.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
            className="space-y-3"
          >
            <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
            <View className="flex-row justify-between flex-wrap">
              {
                results.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => navigation.push("Movie", item)}
                    >
                      <View className="space-y-2 mb-4">
                        <Image
                          className="rounded-3x-l"
                          source={require('../assets/images/moviePoster3.jpg')}
                          style={{width: width*0.44, height: height*0.3}}
                        />
                        <Text className="text-neutral-400 ml-1">
                          {movieName.length > 22 ? movieName.slice(0,22) + '...' : movieName}
                        </Text>
                      </View>

                    </Pressable>
                  )
                })
              }
            </View>
          </ScrollView>
        ):(
          <View className="flex-row justify-center">
            <Image source={require('../assets/images/movieTime.png')}
               className="h-96 w-96 mt-14"
               style={{width: width*0.7, height: height*0.4}}
            />

          </View>
        )
      }

      
    </SafeAreaView>
  )
}