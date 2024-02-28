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

const imperiumDreadnoughtSecond: EventType = {
  title: "Imperium Dreadnought",
  paragraph: `You receive a transmission from your crew inside the Dreadnought: "We have shut down the Dreadnought's shields. We have also discovered plans to invade your home planet. If we don't destroy this thing we will have no place to go home."`,
  option1: "It's too risky to take any chances. Destroy the Dreadnought with your crew still in it.",
  option2: "Shoot to disable the engines of the Dreadnought. And give time for your crew to escape.",
  image: "/events/imperium_dreadnought.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52 -rotate-90",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    const gameInfoChanges = {
			crewChanges: [-gameInfo.crew],
			fuelChanges: [] as number[],
			foodChanges: [] as number[],
			lightYearChanges: [] as number[]
		}

    setGameInfoChanges({...gameInfoChanges})

		return "The Dreadnought exploded with your crew still inside and they all die."
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

		return `Your crew make it out alive on an escape pod, but the weapons on the Dreadnought fire and kill the crew member who was from the White Galaxy. Right before he died, he sent this transmission: "I was sent to be with you to gain as much knowledge as I could, and I have fulfilled my mission. My body might die, but my soul will make it back to the White Galaxy carrying the knowledge of our journey together. Farewell, my friend."`
  }
}

export default imperiumDreadnoughtSecond