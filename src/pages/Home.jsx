import Category from "../components/Category"
import Footer from "../components/Footer"
import Popular from "../components/Popular"

const Home = () => {
    return (
        <div className="p-3">
            <Popular />
            <Category />
            <Footer />
        </div>
    )
}

export default Home