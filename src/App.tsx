import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"
import Event from "./components/Event"
import events from "./events/events"
import { useGlobalContext } from "./utils/context"
import { useState, useEffect } from "react"
import EndGame from "./components/EndGame"
import { EventType } from "./utils/types"
import { Howl } from 'howler'

function App(){
  const {gameInfo} = useGlobalContext()
  const [currentEvent, setCurrentEvent] = useState<"you win" | "you lose" | EventType>(events[0])

  // Set up sound
  useEffect(() => {
    const sound = new Howl({
      src: ["/disasterpeace_background_music.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.02
    })
    sound.play()
  }, [])

  useEffect(() => {
    if(gameInfo.currentEventIndex === "you win"){
      setCurrentEvent("you win")
    }else if(gameInfo.currentEventIndex === "you lose"){
      setCurrentEvent("you lose")
    }else{
      setCurrentEvent(events[gameInfo.currentEventIndex])
    }
  }, [gameInfo.currentEventIndex])

  useEffect(() => {
    localStorage.setItem("gameInfo", JSON.stringify(gameInfo))
  }, [gameInfo])

  return (
    <div className="bg-space w-screen h-screen bg-cover bg-center">
      <TopBar />
      {(currentEvent === "you lose" || currentEvent === "you win") ?
        <EndGame endGame={currentEvent} />
        :
        <Event {...currentEvent}/>
      }
      <img src="/main_ship.png" className="absolute bottom-20 sm:bottom-60 left-2 sm:left-24 w-32 sm:w-52"/>
      <BottomBar />
    </div>
  )
}


export default App