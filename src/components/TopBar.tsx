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

import React from "react"
import { useGlobalContext } from "../utils/context"
import { twMerge } from "tailwind-merge"

const TopBar: React.FC = () => {
  const {gameInfo, setGameInfo, gameInfoChanges, setGameInfoChanges} = useGlobalContext()

  function newGame(){
    setGameInfo({
      crew: 4,
      fuel: 12,
      food: 15,
      lightYears: 15,
      currentEventIndex: 0
    })
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [] as number[],
      foodChanges: [] as number[],
      lightYearChanges: [] as number[]
    })
    location.reload()
  }

  return (
    <div className="w-screen h-12 bg-custom-blue flex justify-between items-center outline outline-offset-[-4px] rounded-b-lg text-xl sm:text-4xl">
      <button onClick={newGame} className="m-0 ml-2 sm:ml-12 p-0 px-2 hover:border-transparent bg-transparent text-nowrap">New Game</button>
      <div className="mr-2 sm:mr-12 text-nowrap px-2">{gameInfo.lightYears} light years from home
        <div className="absolute bg-transparent w-fit h-fit top-12">
          {gameInfoChanges.lightYearChanges.map((lightYearChange) => (
            <p className={twMerge("text-nowrap", lightYearChange > 0 ? "text-green-500" : "text-red-500")}>{lightYearChange > 0 ? "+" + lightYearChange: lightYearChange}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar