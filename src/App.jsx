import Header from "./components/header/Header"
import Jumbotron from "./components/main/Jumbotron"
import Stats from "./components/main/Stats"
import Information from "./components/main/Information"
import PopularCompanies from "./components/main/PopularCompanies"
import PopularEvents from "./components/main/PopularEvents"

import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <Jumbotron/>
    {/* <Stats/> */}
    <Information/>
    <PopularCompanies/>
    <PopularEvents/>
    </>
  )
}

export default App
