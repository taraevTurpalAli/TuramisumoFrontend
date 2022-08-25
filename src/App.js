import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'
import MainRooms from './Components/MainContent/MainRooms/MainRooms'
import MainSlice from './Components/MainContent/MainSlice/MainSlice'


function App() {
  return (
    <div className='App'>
      <MainContent />
      <MainRooms />
      <MainSlice/>
      <Footer />
    </div>
  )
}

export default App
