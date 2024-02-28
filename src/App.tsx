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
    <div className="bg-space w-screen h-screen bg-cover bg-center text-white">
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