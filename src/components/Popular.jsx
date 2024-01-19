import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { getPopularRecipe } from '../utils/api';
const Popular = () => {
    const [popularRecipe, setPopularRecipe] = useState([]);

    useEffect(() => {
        getPopularRecipe()
            .then((data) => {
                setPopularRecipe(data);
            })
    }, [])

    console.log(popularRecipe);
    return (
        <div className="mt-10 p-2">
            <h1 className="text-2xl font-bold">Popular Recipe</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3.5}
                className='mt-5'
            >
                {/* <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 1</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 2</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 3</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 4</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 5</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 6</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 7</SwiperSlide>
                <SwiperSlide className='min-w-36 h-14 bg-green-700 '>Slide 8</SwiperSlide> */}
            </Swiper>

        </div>
    )
}

export default Popular