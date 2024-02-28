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

import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const imperiumScout: EventType = {
  title: "Imperium Scout",
  paragraph: 'On your travels you come across a ship. Your scanners show it has the word "Imperium Scout" on its side.',
  option1: "Engage your stealth cloaking.",
  option2: "Initiate evasive action and prepare for battle.",
  image: "/events/imperium_scout.png",
  imageProperties: "absolute bottom-24 sm:bottom-60 right-2 sm:right-24 w-10 sm:w-16 -rotate-90",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

		return "You engage your stealth cloaking and hope the Imperium Scout doesn't notice you. You fly by without incident."
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-1, -1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [-1, -1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

		return "The Imperium Scout sees you and starts to shoot on sight. Luckily you increase fuel to your engines enough to just move out of the way and fire your own missiles, hitting the scout ship destroying it. You loose 1 fuel, but at least you made it out alive."
  }
}

export default imperiumScout