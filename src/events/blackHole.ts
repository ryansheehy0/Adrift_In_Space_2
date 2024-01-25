import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const blackHole: EventType = {
  title: "Black Hole",
  paragraph: "You encounter a large black hole.",
  option1: "See if you can go around.",
  option2: "No time. Straight ahead.",
  image: "/events/black_hole.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-2, -1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [-2, -1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    return "You go around the black hole, but due to the intense gravity you have to use 2 more fuel."
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-3, -1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [-3],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-2]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    return "You go into the black hole and time travel into the future. You loose 3 crew members due to old age and show up 2 years in the future."
  }
}

export default blackHole