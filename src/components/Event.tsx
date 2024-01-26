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

    // Check if lost or won game
    if(newLightYears <= 0){
      console.log("You won")
    }else{
      if(newCrew <= 0 || newFuel <= 0){
        console.log("You lose")
      }
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
  }

  return (
    <>
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 ">
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