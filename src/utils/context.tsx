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
  const [gameInfo, setGameInfo] = useState<GameInfo>(
    localStorage.getItem("gameInfo") ?
    JSON.parse(localStorage.getItem("gameInfo") as string) as GameInfo
    :
    {
    crew: 4,
    fuel: 12,
    food: 15,
    lightYears: 15,
    currentEventIndex: 0
  })
  const [gameInfoChanges, setGameInfoChanges] = useState<GameInfoChanges>({
    crewChanges: [],
    fuelChanges: [],
    foodChanges: [],
    lightYearChanges: []
  })

  return (
    <Context.Provider value={{gameInfo, setGameInfo, gameInfoChanges, setGameInfoChanges}} >
      {children}
    </Context.Provider>
  )
}

export default Provider