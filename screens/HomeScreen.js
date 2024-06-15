import { Platform, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme/index'
import { useNavigation } from '@react-navigation/native'

// Components
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'

const ios = Platform.OS === 'ios'

const HomeScreen = () => {

  const [trending, setTrending] = useState([1,2,3])
  const [upcoming, setUpcoming] = useState([1,2,3])
  const [topRated, setTopRated] = useState([1,2,3])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios? "-mb-2" : "-mb-3"}>
        <StatusBar style='light' />
        <View className="flex-row justify-between items-center mx-4 mb-8" >
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {
        loading? (
          <Loading />
        ):(
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}
        >

          {/* Trending movies carousel */}
          <TrendingMovies data={trending} />

          {/* upcoming movies row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* top rated movies row */}
          <MovieList title="Top Rated" data={topRated} />

        </ScrollView>
        )
      }

    </View>
  )
}

export default HomeScreen
