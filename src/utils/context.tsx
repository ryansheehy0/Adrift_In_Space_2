/*
 * This file is part of Adrift In Space.
 *
 * Adrift In Space is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adrift In Space is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adrift In Space. If not, see <https://www.gnu.org/licenses/>.
 */

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