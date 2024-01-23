import Provider from "./utils/context"
import TopBar from "./components/topbar"
import BottomBar from "./components/bottombar"

function App(){

  return (
    <Provider>
      <div className="bg-space w-screen h-screen bg-cover bg-center">
        <TopBar />
        <img src="/main_ship.png" className="absolute bottom-24 sm:bottom-48 left-2 sm:left-24 w-32 sm:w-52"/>
        <BottomBar />
      </div>
    </Provider>
  )
}

export default App