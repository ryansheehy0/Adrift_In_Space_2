import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const whiteGalaxy: EventType = {
  title: "White Galaxy",

  paragraph: "A mysterious, ethereal flow emanates from a white galaxy, hinting at unknown wonders. You are drawn to the galaxy and seem to lose control of your actions.",
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

export default whiteGalaxy