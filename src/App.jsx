import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Navbar from "./components/Navbar"
import MoviesList from "./components/MoviesList"
import SpecificMovie from "./pages/SpecificMovie"

function App() {

  return (
   <div>

    <Router>

          <Navbar/>

             <Routes>

                <Route path="/" element={<Home/>}  >    </Route>
                <Route path="/movie/:id" element={<SpecificMovie/> }  >    </Route>
                <Route path="/movies/:type" element={<MoviesList/> }  >    </Route>


             </Routes>

    </Router>


   </div>
  )
}

export default App
