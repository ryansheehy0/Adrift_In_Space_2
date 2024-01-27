import React from "react"
import { useGlobalContext } from "../utils/context"
import { twMerge } from "tailwind-merge"

const TopBar: React.FC = () => {
  const {gameInfo, setGameInfo, gameInfoChanges, setGameInfoChanges} = useGlobalContext()

  function newGame(){
    setGameInfo({
      crew: 4,
      fuel: 12,
      food: 15,
      lightYears: 15,
      currentEventIndex: 0
    })
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [] as number[],
      foodChanges: [] as number[],
      lightYearChanges: [] as number[]
    })
    location.reload()
  }

  return (
    <div className="w-screen h-12 bg-custom-blue flex justify-between items-center outline outline-offset-[-4px] rounded-b-lg text-xl sm:text-4xl">
      <button onClick={newGame} className="m-0 ml-2 sm:ml-12 p-0 px-2 hover:border-transparent bg-transparent text-nowrap">New Game</button>
      <div className="mr-2 sm:mr-12 text-nowrap px-2">{gameInfo.lightYears} light years from home
        <div className="absolute bg-transparent w-fit h-fit top-12">
          {gameInfoChanges.lightYearChanges.map((lightYearChange) => (
            <p className={twMerge("text-nowrap", lightYearChange > 0 ? "text-green-500" : "text-red-500")}>{lightYearChange > 0 ? "+" + lightYearChange: lightYearChange}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar