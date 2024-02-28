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

const barrenPlanet: EventType = {
  title: "Barren Planet",
  paragraph: "You encounter a barren planet. It looks like nothing is on it.",
  option1: "Scan and harvest resources.",
  option2: "Ignore and fly by.",
  image: "/events/barren_planet.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-2],
        fuelChanges: [2, -1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 1){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [2, -1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
		}else{
      gameInfoChanges = {
        crewChanges: [],
        fuelChanges: [2, -1],
        foodChanges: [-1, -1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    if(gameInfo.food === 0){
      return "You scan the planet and find 2 fuel, but it took longer then you expected. Since you don't have any food, 2 of your crew members died from starvation."
    }else if(gameInfo.food === 1){
      return "You scan the planet and find 2 fuel, but it took longer then you expected. Since you only have 1 food, 1 of your crew died from starvation."
    }else{
      return "You scan the planet and find 2 fuel, but it took longer then you expected. Your crew ate 1 more food."
    }
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
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

    return "You pass on by the barren planet without incident."
  }
}

export default barrenPlanet