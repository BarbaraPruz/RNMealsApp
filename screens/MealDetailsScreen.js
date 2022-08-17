import { useLayoutEffect /* useContext */ } from 'react'
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MealSummary from '../components/MealSummary'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
import { MEALS } from '../data/dummy-data'
import { addFavorite, removeFavorite } from '../store/redux/favorites'
//import { FavoritesContext } from '../store/context/favorites-context'

function MealDetailsScreen({ route, navigation }) {
  //  const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()
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

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
  const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      //favoriteMealsCtx.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    } else {
      //favoriteMealsCtx.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
          />
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])

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
