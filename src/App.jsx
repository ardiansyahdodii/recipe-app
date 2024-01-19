import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail"

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App
