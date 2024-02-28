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

const imperiumBattlecruiser: EventType = {
  title: "Imperium Battlecruiser",
  paragraph: `You see an Imperium Battlecruiser. The scout you just saw must have been scouting ahead for this ship. This ship has too powerful sensors for you to try and cloak from. You are receiving a message: "Surrender now to the Imperium. We are confiscating your ship and bringing you in for questioning."`,
  option1: "Flee.",
  option2: "Stand and fight.",
  image: "/events/imperium_battlecruiser.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52 -rotate-90",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

		return "Recognizing the overwhelming firepower of the Imperium Battlecruiser, you decide to run away. Luckily, you are faster and quicker than the Battlecruiser; however, you have to travel away from your home planet to do so."
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
		if(gameInfo.crew < 5){
			// You lose
      gameInfoChanges = {
        crewChanges: [-gameInfo.crew],
        fuelChanges: [] as number[],
        foodChanges: [] as number[],
        lightYearChanges: [] as number[]
      }
		}else{
			gameInfoChanges = {
				crewChanges: [-2],
				fuelChanges: [2, -2],
				foodChanges: [2, -1],
				lightYearChanges: [-1]
			}
		}

    setGameInfoChanges({...gameInfoChanges})

		if(gameInfo.crew < 5){
			return "You decide to fight such a large battlecruiser. You put as much fuel as you can into your thrusters and as much energy as you can into your shields and weapons...  " + "You fight the battlecruiser with everything you got, but it isn't enough. All your crew ends up dying."
		}else{
			return "You decide to fight such a large battlecruiser. You put as much fuel as you can into your thrusters and as much energy as you can into your shields and weapons...  " + "You defeat the battlecruiser just barely, but suffer 2 casualties. You harvest the cruiser for any remaining resources. You find 2 food, but break even on your fuel."
		}

  }
}

export default imperiumBattlecruiser