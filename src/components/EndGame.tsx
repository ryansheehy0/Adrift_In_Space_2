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

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useGlobalContext } from '../utils/context'

type EndGameProps = {
  endGame: "you win" | "you lose"
}
const EndGame: React.FC<EndGameProps> = ({endGame}) => {
  const {setGameInfo, setGameInfoChanges} = useGlobalContext()

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
    <>
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 ">
        {/* Text event */}
        <div className="w-[300px] sm:w-[600px] h-fit bg-custom-blue outline outline-offset-[-4px] rounded-lg p-4">
          <h2 className="text-lg sm:text-3xl">{endGame === "you win" ? "You win" : "You lose"}</h2>
          <p className="text-base sm:text-xl">
            {endGame === "you win" ?
              "You made it home with your crew intact and fulfilled your mission."
            :
              "The meaning to your life is to keep your crew alive and make it back home. You have failed. Therefore, your life no longer has any meaning. With no reason to continue you shut yourself down."
            }
					</p>
        </div>
        {/* Options */}
        <button onClick={newGame} className="w-fit h-fit relative left-1/2 -translate-x-1/2 bg-custom-blue rounded-lg outline outline-offset-[-4px] p-4 text-base sm:text-xl hover:bg-dark-custom-blue block mt-4 border-none">
          New Game
        </button>
        <button onClick={newGame} className="w-fit h-fit relative left-1/2 -translate-x-1/2 bg-custom-blue rounded-lg outline outline-offset-[-4px] p-4 text-base sm:text-xl hover:bg-dark-custom-blue block mt-4 border-none">
					New Game
        </button>
      </div>

      <img src="/home_planet.gif" className={twMerge("absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52", endGame === 'you lose' ? "hidden" : "")}/>
    </>
  )
}

export default EndGame