'use client'
import React, { useState } from 'react';
import styles from './homeSliderIndex.module.scss';
import 'swiper/swiper-bundle.css';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from './Data';

interface DataType {
    img: string,
    rotation: number
}

const WebsiteBanner = () => {
    const [SlideRotation, setSlideRotation] = useState<any>(null)
    const handleSlideChange = (swiper: any) => {
        const realIndex = swiper.realIndex;
        const currentRotation = Data[realIndex]?.rotation;

        if (currentRotation) {
            setSlideRotation(currentRotation);
        }
    };
    return (
        <div className={styles.banner_div_main}>
            <Swiper
                modules={[Autoplay , Navigation , FreeMode]}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: SlideRotation,
                    disableOnInteraction: false
                }}
                onSlideChange={handleSlideChange}
            >
                {
                    Data?.map((item: DataType, index: number) => {
                        return (
                            <SwiperSlide key={index} className={styles.image_slide}>
                                <img src={item?.img} alt="" className={styles.image}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
export default WebsiteBanner