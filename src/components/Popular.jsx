import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { getPopularRecipe } from '../utils/api';
import CardPopular from './CardPopular';
const Popular = () => {
    const [popularRecipe, setPopularRecipe] = useState([]);

    useEffect(() => {
        getPopularRecipe()
            .then((data) => {
                setPopularRecipe(data);
            })
    }, [])

    // console.log(popularRecipe);
    return (
        <div className="mt-10 p-2">
            <h1 className="text-2xl font-bold">Popular Recipe</h1>
            <Swiper
                spaceBetween={25}
                slidesPerView={3.5}
                className='mt-5'
            >
                {popularRecipe.map((recipe) => (
                    <SwiperSlide key={recipe.id}>
                        <CardPopular title={recipe.title} image={recipe.image} ready={recipe.readyInMinutes} score={recipe.spoonacularScore} type={recipe.dishTypes[0]} like={recipe.aggregateLikes}/>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Popular