export type GameInfo = {
  crew: number
  fuel: number
  food: number
  lightYears: number
  currentEvent: string
}

export type GameInfoChanges = {
  crewChanges: number[],
  fuelChanges: number[],
  foodChanges: number[],
  lightYearChanges: number[],
  nextEvent: string
}
