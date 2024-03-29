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

const whiteGalaxy: EventType = {
  title: "White Galaxy",
  paragraph: "A mysterious, ethereal flow emanates from a white galaxy, hinting at unknown wonders. You are drawn to the galaxy and seem to lose control of your actions.",
  option1: "Explore the white galaxy.",
  option2: "Explore the white galaxy.",
  image: "/events/white_galaxy.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, _gameInfo: GameInfo){
    const gameInfoChanges = {
      crewChanges: [1],
      fuelChanges: [2, -1],
      foodChanges: [3, -1],
      lightYearChanges: [-1]
    }

    setGameInfoChanges({...gameInfoChanges})

    return 'You explore the white galaxy and find a civilization emitting this white glow. They communicate with you telepathically which is shocking at first, but a calming emotion passes over you. They say "Hello. Welcome to our galaxy. I see you are in need of food and fuel. We would also like to give you one of our younger members to give them more experience. Our lifespans are very long and we want as much knowledge for our civilization as possible. When our member has learned all that he can, he will be sent back to us." You receive 1 crew, 2 fuel, and 3 food.'
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, _gameInfo: GameInfo){
    const gameInfoChanges = {
      crewChanges: [1],
      fuelChanges: [2, -1],
      foodChanges: [3, -1],
      lightYearChanges: [-1]
    }

    setGameInfoChanges({...gameInfoChanges})

    return 'You explore the white galaxy and find a civilization emitting this white glow. They communicate with you telepathically which is shocking at first, but a calming emotion passes over you. They say "Hello. Welcome to our galaxy. I see you are in need of food and fuel. We would also like to give you one of our younger members to give them more experience. Our lifespans are very long and we want as much knowledge for our civilization as possible. When our member has learned all that he can, he will be sent back to us." You receive 1 crew, 2 fuel, and 3 food.'
  }
}

export default whiteGalaxy