import Provider from "./utils/context"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"
import intro from "./events"
import Event from "./components/Event"

function App(){

  // Use current event to find next event

  return (
    <Provider>
      <div className="bg-space w-screen h-screen bg-cover bg-center">
        <TopBar />
        <Event {...intro}/>
        <img src="/main_ship.png" className="absolute bottom-20 sm:bottom-60 left-2 sm:left-24 w-32 sm:w-52"/>
        <BottomBar />
      </div>
    </Provider>
  )
}


export default App