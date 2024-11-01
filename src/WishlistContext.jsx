
import React, {
  createContext,
  useContext,
  useState,
} from 'react'


const Wishlist = createContext(null)

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(window.localStorage.getItem('wishlist') ? JSON.parse(window.localStorage.getItem('wishlist')) : [])

  const addToWishlist = (item) => {
    if (wishlist.find((i) => i.id === item.id)) {
      return
    }

    const newWishlist = [...wishlist, item]
    setWishlist(newWishlist)

    window.localStorage.setItem('wishlist', JSON.stringify(newWishlist))
  }

  const isInWishlist = (item) => {
    if(!item) {
      return false
    }
    return !!wishlist.find((i) => i.id === item.id)
  }

  const removeFromWishlist = (item) => {
    const newWishlist = wishlist.filter((i) => i.id !== item.id)
    setWishlist(newWishlist)

    window.localStorage.setItem('wishlist', JSON.stringify(newWishlist))
  }

  return (
    <Wishlist.Provider value={{
      wishlist,
      addToWishlist,
      isInWishlist,
      removeFromWishlist
    }}>
      {children}
    </Wishlist.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(Wishlist)

  if (context === null) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }

  return context
}
