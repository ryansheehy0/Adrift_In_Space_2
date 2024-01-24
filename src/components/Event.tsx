import React from 'react'
import { useState } from 'react'
import { GameInfoChanges } from '../utils/types'
import { Dispatch, SetStateAction } from 'react'
import { useGlobalContext } from '../utils/context'

type EventType = {
  name: string
  title: string
  paragraph: string
  option1: string
  option2: string
  image: string
  imageProperties: string
  afterOption1Text: string
  afterOption2Text: string
  option1Function: (setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>) => void
  option2Function: (setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>) => void
}

const Event: React.FC<EventType> = ({title, paragraph, option1, option2, image, imageProperties, afterOption1Text, afterOption2Text, option1Function, option2Function}) => {
  const [afterEvent, setAfterEvent] = useState<false | "option 1" | "option 2">(false)
  const {gameInfo, setGameInfo, gameInfoChanges, setGameInfoChanges} = useGlobalContext()

  function optionClicked(option: "option 1" | "option 2"){
    if(!afterEvent){
      if(option === "option 1"){
        setAfterEvent("option 1")
        option1Function(setGameInfoChanges)
      }else{
        setAfterEvent("option 2")
        option2Function(setGameInfoChanges)
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
    if(newLightYears === 0){
      console.log("You won")
    }else{
      if(newCrew === 0 || newFuel === 0){
        console.log("You lose")
      }
    }

    // Reset old game info changes
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [] as number[],
      foodChanges: [] as number[],
      lightYearChanges: [] as number[],
      nextEvent: ""
    })

    // Apply changes and go to next event
    setGameInfo((gameInfo) => {
      return {
        ...gameInfo,
        crew: newCrew,
        fuel: newFuel,
        food: newFood,
        lightYears: newLightYears,
        currentEvent: gameInfoChanges.nextEvent
      }
    })
  }

  return (
    <>
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 ">
        {/* Text event */}
        <div className="w-[300px] sm:w-[600px] h-fit bg-custom-blue outline outline-offset-[-4px] rounded-lg p-4">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-xl" dangerouslySetInnerHTML={{__html: afterEvent ? (afterEvent === "option 1" ? afterOption1Text : afterOption2Text) : paragraph}} />
        </div>
        {/* Options */}
        <button onClick={() => optionClicked("option 1")} className="w-fit h-fit relative left-1/2 -translate-x-1/2 bg-custom-blue rounded-lg outline outline-offset-[-4px] p-4 text-xl hover:bg-dark-custom-blue block mt-4 border-none">
          {afterEvent ? "continue" : option1}
        </button>
        <button onClick={() => optionClicked("option 2")} className="w-fit h-fit relative left-1/2 -translate-x-1/2 bg-custom-blue rounded-lg outline outline-offset-[-4px] p-4 text-xl hover:bg-dark-custom-blue block mt-4 border-none">
          {afterEvent ? "continue" : option2}
        </button>
      </div>

      <img src={image} className={imageProperties}/>
    </>
  )
}

export default Event