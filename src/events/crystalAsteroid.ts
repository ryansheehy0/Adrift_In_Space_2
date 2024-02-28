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

const crystalAsteroid: EventType = {
  title: "Crystal Asteroid",
  paragraph: "A weird and interesting crystal asteroid approaches your location. You look closer at it and it almost seems artificially made. You lose your concentration looking at it and you have no time to move out of the way.",
  option1: "Try and harvest the crystals for fuel.",
  option2: "It's too risky. Shoot to destroy it out of your path.",
  image: "/events/crystal_asteroid.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-2],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
		}else if(gameInfo.food === 1){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
		}else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [-1],
        foodChanges: [-1, -1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    return "You try and harvest the crystals, but they appear to be made from a material you have never seen before. You spend more time researching what this material is and spend an extra food. Even though it took a while, it appears this crystal was artificially made by an intelligent alien race. This information may come in handy in the future."
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1, -1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    return "You destroy the asteroid, but some of the crystals come flying at your ship and strike one of your crew members, killing them on the spot. Even though you lost one of your crew members, at least you got out safely."
  }
}

export default crystalAsteroid