import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const futuristicShip: EventType = {
  title: "Futuristic Ship",
  paragraph: 'You are receiving a message from the ship you see. "Greetings. This is Captain Aurora of the Celestial Space Ship. We come in peace and are in desperate need of food. We are willing to give you some crew or fuel. Sadly our scans show that you are the only ship close enough for us to trade with. If you refuse to trade we will open fire and take your resources." Your scans show they have advanced technology so you stand no hope of fighting.',
  option1: "Trade food for crew.",
  option2: "Trade food for fuel.",
  image: "/events/futuristic_ship.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1, -1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 1){
      gameInfoChanges = {
        crewChanges: [1, -1],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 2){
      gameInfoChanges = {
        crewChanges: [1],
        fuelChanges: [-1],
        foodChanges: [-1, -1],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [2],
        fuelChanges: [-1],
        foodChanges: [-2, -1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    if(gameInfo.food === 0){
			return `You are receiving a message. "Our scans show you don't have any food. Therefore, will will take 1 of your crew members to eat them.`
    }else if(gameInfo.food === 1){
			return "You give 1 food and get 1 crew."
    }else if(gameInfo.food === 2){
			return "You give 1 food and get 1 crew."
    }else{
			return "You give 2 food and get 2 crew."
		}
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1, -1],
        fuelChanges: [1, -1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 1){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [1, -1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 2){
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [1, -1],
        foodChanges: [-1, -1],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [2, -1],
        foodChanges: [-2, -1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    if(gameInfo.food === 0){
			return `You are receiving a message. "Our scans show you don't have any food. Therefore, we will take 1 of your crew members to eat them and give you 1 fuel.`
    }else if(gameInfo.food === 1){
			return "You give 1 food and get 1 fuel."
    }else if(gameInfo.food === 2){
			return "You give 1 food and get 1 fuel."
    }else{
			return "You give 2 food and get 2 fuel."
		}
  }
}

export default futuristicShip