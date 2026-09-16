export const useFavorites = () => {
  const favorites = useState('favorites', () => [])

  const loadFavorites = () => {
    if (process.client) {
      const saved = localStorage.getItem('pangasinan-favorites')

      if (saved) {
        favorites.value = JSON.parse(saved)
      }
    }
  }

  const saveFavorites = () => {
    if (process.client) {
      localStorage.setItem(
        'pangasinan-favorites',
        JSON.stringify(favorites.value)
      )
    }
  }

  const toggleFavorite = (id) => {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter(
        favoriteId => favoriteId !== id
      )
    } else {
      favorites.value.push(id)
    }

    saveFavorites()
  }

  const isFavorite = (id) => {
    return favorites.value.includes(id)
  }

  return {
    favorites,
    loadFavorites,
    toggleFavorite,
    isFavorite
  }
}