import { useNavigation } from '@react-navigation/native'

import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import MealSummary from '../MealSummary'

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation()

  function selectMealItemHandler() {
    navigation.navigate('MealDetails', { mealId: id })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#fff' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : '')}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealSummary
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    // for feedback on IOS
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
export default MealItem
