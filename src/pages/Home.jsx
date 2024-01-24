import Category from "../components/Category"
import Popular from "../components/Popular"

const Home = () => {
    return (
        <div className="p-3">
            <Popular />
            <Category />
        </div>
    )
}

export default Home