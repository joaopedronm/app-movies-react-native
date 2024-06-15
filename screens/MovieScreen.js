import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'

var{width, height} = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? 'mt-3' : 'mt-3'

export default function MovieScreen() {

  const {params: item} = useRoute()
  const [isFavourite, toggleFavourite] = useState(false)
  const [cast, setCast] = useState([1,2,3,4,5])
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()
  let movieName = 'Ant-Man an the Wasp: Quantumania'

  useEffect(() => {
    // call the movie details api
  }, [item])

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 5}}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? theme.background : "white"} />
          </TouchableOpacity>

        </SafeAreaView>

        {
          loading ? (
            <Loading />
          ) : (
            <View>
              <Image
                source={require('../assets/images/moviePoster2.jpg')}
                style={{width, height: height*0.55}}
              />
              <LinearGradient
                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                style={{width, height: height*0.4}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute bottom-0"
              />
            </View>
          )
        }

      </View>

      {/* movie details */}
      <View style={{marginTop: -(height*0.09)}} className="space-y-3">

        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>

        {/* status, release, runtime */}
        <Text className="text-neutral-400 font-semibold text-center">
          Released ∙ 2020 ∙ 160 min
        </Text>

        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2 space">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action &#x2022; 
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill &#x2022;  
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy 
          </Text>
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mother hiding? And who is the mysterious Kang?
        </Text>
      </View>

      {/* cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* similar movies */}
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
      

    </ScrollView>
  )
}