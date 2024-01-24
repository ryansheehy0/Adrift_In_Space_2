import { GameInfoChanges } from "./utils/types"
import { Dispatch, SetStateAction } from 'react'

const intro = {
	name: "intro",
  title: "Home Planet",
  paragraph: "&emsp;You are an AI captain of an adrift space ship trying to keep your crew alive and get back to your home planet.</br>&emsp;For each event you are given 2 options. Each option will result in outcomes which can be good, bad, or neutral.",
  option1: "Option 1",
  option2: "Option 2",
  image: "/home_planet.gif",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  afterOption1Text: "&emsp;Each event, 1 food and fuel is consumed and you get 1 light year closer to home. If you have no food, 1 crew member dies from starvation.</br>&emsp;You loose if you have no more crew or fuel.</br>&emsp;You win when you have no more light years from home.",
  afterOption2Text: "&emsp;Each event, 1 food and fuel is consumed and you get 1 light year closer to home. If you have no food, 1 crew member dies from starvation.</br>&emsp;You loose if you have no more crew or fuel.</br>&emsp;You win when you have no more light years from home.",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "asteroid"
    })
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "asteroid"
    })
  }
}

const asteroid = {
	name: "asteroid",
  title: "Asteroid",
  paragraph: "A single asteroid approaches your location. If you do nothing you will be hit.",
  option1: "Go to the left of the asteroid.",
  option2: "Go to the right of the asteroid.",
  image: "/events/asteroid.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  afterOption1Text: "You move left of the asteroid and get hit losing 1 crew member.",
  afterOption2Text: "You move right of the asteroid and pass by without any problems.",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [-1],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "barren planet"
    })
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "barren planet"
    })
  }
}

const barrenPlanet = {
	name: "barren planet",
  title: "Barren Planet",
  paragraph: "You encounter a barren planet. It looks like nothing is on it.",
  option1: "Scan and harvest resources.",
  option2: "Ignore and fly by.",
  image: "/events/barren_planet.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  afterOption1Text: "You scan the planet and find 2 Fuel, but it took longer then you expected.",
  afterOption2Text: "You pass on by the barren planet without incident.",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [+2, -1],
      foodChanges: [-1, -1],
      lightYearChanges: [-1],
			nextEvent: "black hole"
    })
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "black hole"
    })
  }
}

const blackHole = {
	name: "black hole",
  title: "Black Hole",
  paragraph: "You encounter a large black hole.",
  option1: "See if you can go around.",
  option2: "No time. Straight ahead.",
  image: "/events/black_hole.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  afterOption1Text: "You go around the black hole, but due to the intense gravity you have to use 2 more fuel.",
  afterOption2Text: "You go into the black hole and time travel into the future. You loose 3 crew members due to old age and show up 2 years in the future.",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-2, -1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "blue star"
    })
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [-3],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-2],
			nextEvent: "blue star"
    })
  }
}

const blueStar = {
	name: "blue star",
  title: "Blue Star",
  paragraph: "You see a blue star. The flowing plasma looks alluring and dangerous. You want to get closer, but you know you could get burned.",
  option1: "Harvest fuel, but risk the chance to get burned.",
  option2: "Leave it alone and go past.",
  image: "/events/blue_star.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  afterOption1Text: "You increase your ships thrusters and suck in some plasma. A sun flare is headed for your direction, but luckily it just misses you. You convert some of the plasma to fuel and gain 1 fuel.",
  afterOption2Text: "You fly past without experiencing any problems.",

  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [1, -1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "crystal asteroid"
    })
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "crystal asteroid"
    })
  }
}

const crystalAsteroid = {
	name: "crystal asteroid",
  title: "Crystal Asteroid",
  paragraph: "A weird and interesting crystal asteroid approaches your location. You look closer at it and it almost seems artificially made. You lose your concentration looking at it and you have no time to move out of the way.",
  option1: "Try and harvest the crystals for fuel.",
  option2: "It's too risky. Shoot to destroy it out of your path.",
  image: "/events/crystal_asteroid.png",
  imageProperties: "absolute bottom-20 sm:bottom-52 right-2 sm:right-24 w-32 sm:w-52",
  afterOption1Text: "You try and harvest the crystals, but they appear to be made from a material you have never seen before. You spend more time researching what this material is. Even though it took a while, it appears this crystal was artificially made by an intelligent alien race. This information may come in handy in the future.",
  afterOption2Text: "You destroy the asteroid, but some of the crystals come flying at your ship and strike one of your crew members killing them on the spot. Even though you lost one of your crew members at least you got out safely.",
  option1Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [] as number[],
      fuelChanges: [-1],
      foodChanges: [-2],
      lightYearChanges: [-1],
			nextEvent: "futuristic ship"
    })
  },
  option2Function: function(setGameInfoChanges: Dispatch<SetStateAction<GameInfoChanges>>){
    setGameInfoChanges({
      crewChanges: [-1],
      fuelChanges: [-1],
      foodChanges: [-1],
      lightYearChanges: [-1],
			nextEvent: "futuristic ship"
    })
  }
}

const events = [
	intro,
	asteroid,
	barrenPlanet,
	blackHole,
	blueStar,
	crystalAsteroid
]
export default events