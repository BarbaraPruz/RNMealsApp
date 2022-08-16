import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  function addFavorite(id) {
    setFavoriteMealIds((favMealIds) => [...favMealIds, id])
  }

  function removeFavorite(id) {
    setFavoriteMealIds((favMealIds) => favMealIds.filter((mId) => mId !== id))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
