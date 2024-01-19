import Category from "../components/Category"
import Footer from "../components/Footer"
import Popular from "../components/Popular"
import SearchRecipe from "../components/SearchRecipe"

const Home = () => {
    return (
        <div>
            <SearchRecipe />
            <Popular />
            <Category />
            <Footer />
        </div>
    )
}

export default Home