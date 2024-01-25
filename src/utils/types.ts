import { Dispatch, SetStateAction } from 'react'

export type GameInfo = {
  crew: number
  fuel: number
  food: number
  lightYears: number
  currentEventIndex: number | "you win" | "you lose"
}

export type GameInfoChanges = {
  crewChanges: number[],
  fuelChanges: number[],
  foodChanges: number[],
  lightYearChanges: number[],
}

export type EventType = {
  title: string
  paragraph: string
  option1: string
  option2: string
  image: string
  imageProperties: string
  option1Function: (setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo) => string
  option2Function: (setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>, gameInfo: GameInfo) => string
}