import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const lavaPlanet: EventType = {
  title: "Lava Planet",
  paragraph: "Your sensors detect a nearby lava planet. Its fiery surface glows fiercely and it seems dangerous.",
  option1: "Send a team to gather food.",
  option2: "Bypass the planet and err on the side of caution.",
  image: "/events/lava_planet.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, _gameInfo: GameInfo){
    const gameInfoChanges = {
			crewChanges: [-1],
			fuelChanges: [-1],
			foodChanges: [2, -1],
			lightYearChanges: [-1]
		}

    setGameInfoChanges({...gameInfoChanges})

		return "You send a team of your crew. They have discovered 2 food, but it was a rough journey to acquire it and 1 crew member died."
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

		return "You move bypass the planet and nothing of interest happens. At least you didn't risk the life of your crew."
  }
}

export default lavaPlanet