import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={25}
                slidesPerView={3.5}
                navigation={true}
                pagination={{ clickable: true }}
                className='mySwiper mt-5'
            >
                {popularRecipe.map((recipe) => (
                    <SwiperSlide key={recipe.id}>  
                        <CardPopular id={recipe.id} title={recipe.title} image={recipe.image} ready={recipe.readyInMinutes} score={recipe.spoonacularScore} type={recipe.dishTypes[0]} like={recipe.aggregateLikes} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Popular