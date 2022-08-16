import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

function MealsList({ items }) {
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
        data={items}
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

export default MealsList
