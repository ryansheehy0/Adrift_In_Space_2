import React from "react"
import { useGlobalContext } from "../utils/context"

const TopBar: React.FC = () => {
  const {gameInfo, setGameInfo} = useGlobalContext()

  function newGame(){
    setGameInfo({
      crew: 4,
      fuel: 11,
      food: 14,
      lightYears: 14,
      currentEvent: "intro"
    })
  }

  return (
    <div className="w-screen h-12 bg-custom-blue flex justify-between items-center outline outline-offset-[-4px] rounded-b-lg text-xl sm:text-4xl">
      <button onClick={newGame} className="m-0 ml-2 sm:ml-12 p-0 px-2 hover:border-transparent bg-transparent text-nowrap">New Game</button>
      <p className="mr-2 sm:mr-12 text-nowrap px-2">{gameInfo.lightYears} light years from home</p>
    </div>
  )
}

export default TopBar