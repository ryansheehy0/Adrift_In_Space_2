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