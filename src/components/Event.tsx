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

import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../utils/context'
import { EventType } from '../utils/types'

const Event: React.FC<EventType> = ({title, paragraph, option1, option2, image, imageProperties, option1Function, option2Function}) => {
  const [afterEventText, setAfterEventText] = useState<false | string>(false)
  const {gameInfo, setGameInfo, gameInfoChanges, setGameInfoChanges} = useGlobalContext()

  function optionClicked(option: "option 1" | "option 2"){
    if(!afterEventText){
      if(option === "option 1"){
        setAfterEventText(option1Function(setGameInfoChanges, gameInfo))
      }else{
        setAfterEventText(option2Function(setGameInfoChanges, gameInfo))
      }
      return
    }

    // Get the new game info values
    let newCrew = gameInfo.crew
    for(const crewChange of gameInfoChanges.crewChanges){
      newCrew += crewChange
    }

    let newFuel = gameInfo.fuel
    for(const fuelChange of gameInfoChanges.fuelChanges){
      newFuel += fuelChange
    }

    let newFood = gameInfo.food
    for(const foodChange of gameInfoChanges.foodChanges){
      newFood += foodChange
    }

    let newLightYears = gameInfo.lightYears
    for(const lightYearChange of gameInfoChanges.lightYearChanges){
      newLightYears += lightYearChange
    }

    // Reset old game info changes
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [] as number[],
      foodChanges: [] as number[],
      lightYearChanges: [] as number[],
    })
    setAfterEventText(false)

    // Apply changes and go to next event
    setGameInfo((gameInfo) => {
      return {
        ...gameInfo,
        crew: newCrew,
        fuel: newFuel,
        food: newFood,
        lightYears: newLightYears,
        currentEventIndex: (typeof gameInfo.currentEventIndex === "number" ? gameInfo.currentEventIndex + 1 : 0)
      }
    })

    // Check if lost or won game
    if(newLightYears <= 0){
      if(newCrew <= 0){
        setGameInfo((gameInfo) => {return {...gameInfo, currentEventIndex: "you lose"}})
      }else{
        setGameInfo((gameInfo) => {return {...gameInfo, currentEventIndex: "you win"}})
      }
    }else{
      if(newCrew <= 0 || newFuel <= 0){
        setGameInfo((gameInfo) => {return {...gameInfo, currentEventIndex: "you lose"}})
      }
    }
  }

  return (
    <>
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 z-10">
        {/* Text event */}
        <div className="w-[300px] sm:w-[600px] h-fit bg-custom-blue outline outline-offset-[-4px] rounded-lg p-4">
          <h2 className="text-lg sm:text-3xl">{title}</h2>
          <p className="text-base sm:text-xl" dangerouslySetInnerHTML={{__html: afterEventText ? afterEventText : paragraph}} />
        </div>
        {/* Options */}
        <button onClick={() => optionClicked("option 1")} className="w-fit h-fit relative left-1/2 -translate-x-1/2 bg-custom-blue rounded-lg outline outline-offset-[-4px] p-4 text-base sm:text-xl hover:bg-dark-custom-blue block mt-4 border-none">
          {afterEventText ? "continue" : option1}
        </button>
        <button onClick={() => optionClicked("option 2")} className="w-fit h-fit relative left-1/2 -translate-x-1/2 bg-custom-blue rounded-lg outline outline-offset-[-4px] p-4 text-base sm:text-xl hover:bg-dark-custom-blue block mt-4 border-none">
          {afterEventText ? "continue" : option2}
        </button>
      </div>

      <img src={image} className={imageProperties}/>
    </>
  )
}

export default Event