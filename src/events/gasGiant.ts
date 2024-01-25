import { GameInfoChanges, GameInfo } from "../utils/types"
import { Dispatch, SetStateAction } from 'react'
import { EventType } from "../utils/types"

const gasGiant: EventType = {
  title: "Gas Giant",
  paragraph: "You see a giant gas planet. It's gravity is very strong. Stronger than your ship can handle in its current state.",
  option1: "Release some food to decrease your weight.",
  option2: "Increase power to the engines and use more fuel.",
  image: "/events/gas_giant.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.food === 0){
      gameInfoChanges = {
        crewChanges: [-2, -1],
        fuelChanges: [-1],
        foodChanges: [] as number[],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 1){
      gameInfoChanges = {
        crewChanges: [-1, -1],
        fuelChanges: [-1],
        foodChanges: [-1],
        lightYearChanges: [-1]
      }
    }else if(gameInfo.food === 2){
      gameInfoChanges = {
        crewChanges: [-1],
        fuelChanges: [-1],
        foodChanges: [-2],
        lightYearChanges: [-1]
      }
    }else{
      gameInfoChanges = {
        crewChanges: [] as number[],
        fuelChanges: [-1],
        foodChanges: [-2, -1],
        lightYearChanges: [-1]
      }
    }

    setGameInfoChanges({...gameInfoChanges})

    if(gameInfo.food === 0){
			return "You do not have enough food to throw aboard so you throw 2 of your crew members out."
    }else if(gameInfo.food === 1){
			return "You do not have enough food to throw aboard so you throw 1 of your crew members out and 1 of your food."
    }else if(gameInfo.food === 2){
			return "You released 2 food which just allows you to escape the gravity of the gas giant."
    }else{
			return "You released 2 food which just allows you to escape the gravity of the gas giant."
		}
  },

  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo){
    let gameInfoChanges
    if(gameInfo.fuel === 0){
			if(gameInfo.food === 0){
				gameInfoChanges = {
					crewChanges: [-2, -1],
					fuelChanges: [-1],
					foodChanges: [] as number[],
					lightYearChanges: [-1]
				}
			}else{
				gameInfoChanges = {
					crewChanges: [-2],
					fuelChanges: [-1],
					foodChanges: [-1],
					lightYearChanges: [-1]
				}
			}
    }else if(gameInfo.fuel === 1){
			if(gameInfo.food === 0){
				gameInfoChanges = {
					crewChanges: [-1, -1],
					fuelChanges: [-1, -1],
					foodChanges: [] as number[],
					lightYearChanges: [-1]
				}
			}else{
				gameInfoChanges = {
					crewChanges: [-1],
					fuelChanges: [-1, -1],
					foodChanges: [-1],
					lightYearChanges: [-1]
				}
			}
    }else if(gameInfo.fuel === 2){
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
    }else{
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
    }

    setGameInfoChanges({...gameInfoChanges})

		if(gameInfo.fuel === 0){
			return "You do not have enough fuel so you throw 2 of your crew members out."
		}else if(gameInfo.fuel === 1){
			return "You do not have enough fuel so you throw 1 of your crew members out and use 1 of fuel."
		}else if(gameInfo.fuel === 2){
			return "You increase power to the engines which luckily allows you to break free from the immense gravity, however at the cost of 2 extra fuel."
		}else{
			return "You increase power to the engines which luckily allows you to break free from the immense gravity, however at the cost of 2 extra fuel."
		}
  }
}

export default gasGiant