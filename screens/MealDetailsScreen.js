import { useLayoutEffect } from 'react'
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native'
import MealSummary from '../components/MealSummary'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
import { MEALS } from '../data/dummy-data'

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId
  const meal = MEALS.find((m) => m.id === mealId)
  const {
    imageUrl,
    title,
    affordability,
    duration,
    complexity,
    ingredients,
    steps,
  } = meal

  function headerButtonPressHandler() {
    console.log('pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon="star"
            color="white"
          />
        )
      },
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealSummary
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.summaryText}
      />
      <View style={styles.listContainerOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  summaryText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listContainerOuter: {
    alignItems: 'center',
  },
})

export default MealDetailsScreen
