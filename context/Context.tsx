import React, { FC, createContext, useState } from 'react'

export const FavoriteContext = createContext<any>(null)

const NavContext: FC<{ children: JSX.Element }> = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <FavoriteContext.Provider value={{ isFavorite, setIsFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default NavContext
