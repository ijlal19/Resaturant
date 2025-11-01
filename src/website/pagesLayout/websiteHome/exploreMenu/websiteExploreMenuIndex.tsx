'use client'
import React from 'react';
import styles from './websiteExploreMenuIndex.module.scss';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ExploreMenuCard from './explorMenyCard/exploreMenuCard';

interface DataType {
    title: string,
    img: string
}

const WebsiteExploreMenu = () => {
    const Data = [
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
        {
            title: "Crunchy Burgers",
            img: "https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png"
        },
    ]
    return (
        <div className={styles.exploremenu_div_main}>
            <div className={styles.exploremenu_div_container}>
                <p className={styles.heading}><span className={styles.best}>EXPLORE</span> MENU</p>
                <div className={styles.slider_div_main}>
                    <Swiper
                        modules={[Autoplay]}
                        className={styles.swiper}
                        loop={true}
                        slidesPerView={2}
                        slidesPerGroup={1}
                        spaceBetween={10}
                        simulateTouch={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            550: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 25
                            },
                            768: {
                                slidesPerView: 4,
                                slidesPerGroup: 1,
                                spaceBetween: 25
                            },
                            900: {
                                slidesPerView: 5,
                                slidesPerGroup: 1,
                                spaceBetween: 25
                            },
                        }}
                    >
                        {
                            Data?.map((item: DataType, index: number) => {
                                return (
                                    <SwiperSlide key={index} className={styles.swiper_slide}>
                                        <ExploreMenuCard props={item} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className={styles.grid_card_div}>
                    <div className={styles.singel_card_div}>
                        <p className={styles.title}>Lorem, ipsum.</p>
                        <img src="https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9a86-dbbfcb55fbdd-FF2GT-2025-08-11075548.png" alt="" className={styles.image} />
                    </div>
                    <div className={styles.others_card_div}>
                        {
                            Data.slice(0, 4)?.map((item: DataType, index: number) => {
                                return (
                                    <div className={styles.card_div} key={index}>
                                        <p className={styles.title}>{item?.title}</p>
                                        <img src={item?.img} alt="" className={styles.image} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WebsiteExploreMenu