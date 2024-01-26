import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const intro: EventType = {
  title: "Home Planet",
  paragraph: "&emsp;You're an AI captain of an adrift space ship trying to keep your crew alive and get back to your home planet.</br>&emsp;For each event you are given 2 options. Each option will result in outcomes which can be good, bad, or neutral.",
  option1: "Option 1",
  option2: "Option 2",
  image: "/home_planet.gif",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
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

    return "&emsp;Each event, 1 food and fuel is consumed and you get 1 light year closer to home. If you have no food, 1 crew member dies from starvation.</br>&emsp;You loose if you have no more crew or fuel.</br>&emsp;You win when you have no more light years from home."
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

    return "&emsp;Each event, 1 food and fuel is consumed and you get 1 light year closer to home. If you have no food, 1 crew member dies from starvation.</br>&emsp;You loose if you have no more crew or fuel.</br>&emsp;You win when you have no more light years from home."
  }
}

export default intro