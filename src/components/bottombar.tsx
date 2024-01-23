import React from "react"
import { useGlobalContext } from "../utils/context"
import { twMerge } from "tailwind-merge"

const BottomBar: React.FC = () => {
  const {gameInfo, gameInfoChanges} = useGlobalContext()

  return (
    <div className="w-fit h-12 bg-custom-blue flex justify-between absolute bottom-0 items-center outline outline-offset-[-4px] rounded-t-lg left-1/2 -translate-x-1/2 p-4 text-xl sm:text-4xl">
      <p className="mr-4 sm:mr-10 text-nowrap relative">Crew: {gameInfo.crew}
        <div className="absolute bg-transparent w-fit h-fit bottom-12 left-12 sm:left-20">
          {gameInfoChanges.crewChanges.map((crewChange) => (
            <p className={twMerge("text-nowrap", crewChange > 0 ? "text-green-500" : "text-red-500")}>{crewChange > 0 ? "+" + crewChange: crewChange}</p>
          ))}
        </div>
      </p>
      <p className="mr-4 sm:mr-10 text-nowrap relative">Fuel: {gameInfo.fuel}
        <div className="absolute bg-transparent w-fit h-fit bottom-12 left-12 sm:left-20">
          {gameInfoChanges.fuelChanges.map((fuelChange) => (
            <p className={twMerge("text-nowrap", fuelChange > 0 ? "text-green-500" : "text-red-500")}>{fuelChange > 0 ? "+" + fuelChange: fuelChange}</p>
          ))}
        </div>
      </p>
      <p className="text-nowrap relative">Food: {gameInfo.food}
        <div className="absolute bg-transparent w-fit h-fit bottom-12 left-12 sm:left-20">
          {gameInfoChanges.foodChanges.map((foodChange) => (
            <p className={twMerge("text-nowrap", foodChange > 0 ? "text-green-500" : "text-red-500")}>{foodChange > 0 ? "+" + foodChange: foodChange}</p>
          ))}
        </div>
      </p>
    </div>
  )
}

export default BottomBar