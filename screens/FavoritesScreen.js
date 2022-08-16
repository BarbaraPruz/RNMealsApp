import { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from '../store/context/favorites-context'

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMeals = MEALS.filter((m) => favoriteMealsCtx.ids.includes(m.id))

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals!</Text>
      </View>
    )
  }
  return <MealsList items={favoriteMeals} />
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default FavoritesScreen
