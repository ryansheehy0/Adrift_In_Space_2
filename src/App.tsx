import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"
import Event from "./components/Event"
import events from "./events/events"
import { useGlobalContext } from "./utils/context"
import { useState, useEffect } from "react"

function App(){
  const {gameInfo} = useGlobalContext()
  const [currentEvent, setCurrentEvent] = useState(events[0])

  useEffect(() => {
    if(gameInfo.currentEventIndex === "you win"){
      console.log("You win")
    }else if(gameInfo.currentEventIndex === "you lose"){
      console.log("You lose")
    }else{
      setCurrentEvent(events[gameInfo.currentEventIndex])
    }
  }, [gameInfo.currentEventIndex])


  return (
    <div className="bg-space w-screen h-screen bg-cover bg-center">
      <TopBar />
      <Event {...currentEvent}/>
      <img src="/main_ship.png" className="absolute bottom-20 sm:bottom-60 left-2 sm:left-24 w-32 sm:w-52"/>
      <BottomBar />
    </div>
  )
}


export default App