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

const blueStar: EventType = {
  title: "Blue Star",
  paragraph: "You see a blue star. The flowing plasma looks alluring and dangerous. You want to get closer, but you know you could get burned.",
  option1: "Harvest fuel, but risk the chance to get burned.",
  option2: "Leave it alone and go past.",
  image: "/events/blue_star.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [1, -1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [1, -1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    return "You increase your ships thrusters and suck in some plasma. A sun flare is headed for your direction, but luckily it just misses you. You convert some of the plasma to fuel and gain 1 fuel."
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

    return "You fly past without experiencing any problems."
  }
}

export default blueStar