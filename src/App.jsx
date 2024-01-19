import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import SearchRecipe from "./components/SearchRecipe"
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail"
import SearchPage from "./pages/SearchPage"

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <SearchRecipe />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
