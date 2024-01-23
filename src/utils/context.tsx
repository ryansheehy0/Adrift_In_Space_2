import { createContext, useContext, useState } from 'react'
import React, { ReactNode, Dispatch, SetStateAction } from 'react'
import { GameInfo, GameInfoChanges } from './types'

type GlobalContextValue = {
  gameInfo: GameInfo
  setGameInfo: Dispatch<SetStateAction<GameInfo>>
  gameInfoChanges: GameInfoChanges
  setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>
}

const Context = createContext<GlobalContextValue | undefined>(undefined)
export const useGlobalContext = (): GlobalContextValue => {
  const context = useContext(Context)
  if(!context) throw new Error("useGlobalContext must be used within a GlobalContextProvider.")
  return context
}

//The game info and current event needs to be set through local storage

type ProviderProps = {
  children: ReactNode
}

const Provider: React.FC<ProviderProps> = ({children}) => {
  const [gameInfo, setGameInfo] = useState({
    crew: 4,
    fuel: 11,
    food: 14,
    lightYears: 14,
    currentEvent: "intro"
  })
  const [gameInfoChanges, setGameInfoChanges] = useState<GameInfoChanges>({
    crewChanges: [],
    fuelChanges: [],
    foodChanges: [],
    lightYearChanges: [],
    nextEvent: "asteroid"
  })

  return (
    <Context.Provider value={{gameInfo, setGameInfo, gameInfoChanges, setGameInfoChanges}} >
      {children}
    </Context.Provider>
  )
}

export default Provider