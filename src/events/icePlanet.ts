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

const icePlanet: EventType = {
  title: "Ice Planet",
  paragraph: `You see an ice planet and there appears to a small outpost. You receive an SOS message. "Day 1029 since we were abandoned by the Imperium. Our resources are gone and we are slowly dying out. Yesterday we had to eat Tolumus. He was the first of us to die and we waited as long as we could. What was weird is he didn't die from the cold, but what we think is some sort of disease only on this planet. Maybe that's why the Imperium abandoned us.`,
  option1: "Pickup the abandoned Imperium Crew and risk the disease coming aboard.",
  option2: "Leave them for the safety of your crew.",
  image: "/events/ice_planet.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [2, -1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [2],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

		return "You welcome on the abandoned Imperium crew. They are very happy that you saved them, but they are very weak. While eating, one of them dies suddenly. The ship executes automatic quarantine. 3 more of the Imperium crew die while in quarantine. You run tests on the 2 remaining diseased crew and they seem to be immune and non contagious, so you add them to your crew."
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

		return `You hear another SOS message. "Day 1030 since we were abandoned by the Imperium. We ate Tolumus two days ago. Sadly our suspicions turned out correct. The disease that killed him now infected us. I don't think we have many more days left. We are desperately searching for a cure. Honlus said the scans found some sort of plant a couple days journey south which might cure our disease. I will be left here to keep the daily SOS message incase some ship comes by our location. Hopefully that plant cures us and I live long enough for them to come back." You go on your way leaving the abandoned crew to their fate. The abandoned crew being abandoned yet again.`
  }
}

export default icePlanet