import { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId)?.title
    navigation.setOptions({ title: categoryTitle })
  }, [categoryId, navigation])

  function renderMealItem(itemData) {
    const {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    } = itemData.item
    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    }
    return <MealItem {...mealItemProps} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
export default MealsOverviewScreen
