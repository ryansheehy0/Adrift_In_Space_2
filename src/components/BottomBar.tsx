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

import React from "react"
import { useGlobalContext } from "../utils/context"
import { twMerge } from "tailwind-merge"

const BottomBar: React.FC = () => {
  const {gameInfo, gameInfoChanges} = useGlobalContext()

  return (
    <div className="w-fit h-12 bg-custom-blue flex justify-between absolute bottom-0 items-center outline outline-offset-[-4px] rounded-t-lg left-1/2 -translate-x-1/2 p-4 text-xl sm:text-4xl z-20">
      <div className="mr-4 sm:mr-10 text-nowrap relative">Crew: {gameInfo.crew}
        <div className="absolute bg-transparent w-fit h-fit bottom-12 left-12 sm:left-20">
          {gameInfoChanges.crewChanges.map((crewChange) => (
            <p className={twMerge("text-nowrap", crewChange > 0 ? "text-green-500" : "text-red-500")}>{crewChange > 0 ? "+" + crewChange: crewChange}</p>
          ))}
        </div>
      </div>
      <div className="mr-4 sm:mr-10 text-nowrap relative">Fuel: {gameInfo.fuel}
        <div className="absolute bg-transparent w-fit h-fit bottom-12 left-12 sm:left-20">
          {gameInfoChanges.fuelChanges.map((fuelChange) => (
            <p className={twMerge("text-nowrap", fuelChange > 0 ? "text-green-500" : "text-red-500")}>{fuelChange > 0 ? "+" + fuelChange: fuelChange}</p>
          ))}
        </div>
      </div>
      <div className="text-nowrap relative">Food: {gameInfo.food}
        <div className="absolute bg-transparent w-fit h-fit bottom-12 left-12 sm:left-20">
          {gameInfoChanges.foodChanges.map((foodChange) => (
            <p className={twMerge("text-nowrap", foodChange > 0 ? "text-green-500" : "text-red-500")}>{foodChange > 0 ? "+" + foodChange: foodChange}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBar