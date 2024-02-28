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

const imperiumDreadnought: EventType = {
  title: "Imperium Dreadnought",
  paragraph: `As you chart your course through the cosmos, a colossal vessel appears on the scanners. An Imperial Dreadnought. This behemoth of a ship is a symbol of the Imperium's overwhelming might, armed with formidable weaponry and formidable defenses. The crew member that was sent with you from the White Galaxy says to you "Captain, this is a formidable adversary. Engaging them directly could be disastrous. I have information on a hidden route that may allow you to bypass their surveillance. It's risky, but it might be our best chance for survival."`,
  option1: "Follow the hidden route.",
  option2: "Engage in battle.",
  image: "/events/imperium_dreadnought.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52 -rotate-90",
  option1Function: function(_setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, _gameInfo: GameInfo){
		return "Trusting the advice of your crew member, you send the rest of your crew into the Dreadnought. Hopefully they will find a way to blow up the Dreadnought or shut it down from the inside."
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    const gameInfoChanges = {
			crewChanges: [-gameInfo.crew],
			fuelChanges: [] as number[],
			foodChanges: [] as number[],
			lightYearChanges: [] as number[]
		}

    setGameInfoChanges({...gameInfoChanges})

		return "You decide to prepare for a direct confrontation with the Imperium Dreadnought, but it is too powerful and blows you up killing you and your crew."
  }
}

export default imperiumDreadnought