import Header from "./components/header/Header"
import Jumbotron from "./components/main/Jumbotron"
import Stats from "./components/main/Stats"
import Information from "./components/main/Information"
import CompanyCarousel from "./components/main/CompanyCarousel"

import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <Jumbotron/>
    {/* <Stats/> */}
    <Information/>
    <CompanyCarousel deviceType=""/>
    </>
  )
}

export default App
