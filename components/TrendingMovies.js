import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

var{width, height} = Dimensions.get('window')

const TrendingMovies = ({data}) => {

  const navigation = useNavigation()
  const handleClick = () => {
    navigation.navigate('Movie', item)
  }

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-8">TrendingMovies</Text>
      <Carousel
      data={data}
      renderItem={({item}) => <MovieCard item={item} handleClick={handleClick} />}
      firstItem={1}
      inactiveSlideOpacity={0.6}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image
                source={require('../assets/images/moviePoster1.jpg')}
                style={{width: width*0.6, height: height*0.4}}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
      
    )
}

export default TrendingMovies