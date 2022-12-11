import './App.css'
import AddDelete from './Components/AddDelete'
import HOCmain from './Components/HOC/HOCmain'
import DisplayData from './Components/ReduxComponents/DisplayData'
import ShareA from './Components/ShareData/ShareA'
import UseAPI from './Components/UseAPI'

function App() {
  return (
    <div className="App">
      <AddDelete />
      <hr />
      <UseAPI />
      <hr />
      <HOCmain />
      <hr />
      <DisplayData />
      <hr />
      <ShareA />
    </div>
  )
}

export default App
