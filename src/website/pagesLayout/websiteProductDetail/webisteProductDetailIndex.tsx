'use client'
import styles from './websiteProductDetailIndex.module.scss';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useParams } from "next/navigation";
import { Thumbs } from 'swiper/modules';
import ProductData from "./data";
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';

interface DataType {
    img: string,
    title: string,
    price: string,
    id: string,
    description: string
}

const ProductDetail = () => {
    const [ProductDatas, setProductData] = useState<any>([])
    const { slug1 } = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const [value, setValue] = React.useState<number | null>(2);

    // useEffect(() => {
    //     filterProduct(slug1)
    // }, [])

    // const filterProduct = (id: any) => {

    //     const Product = kfcMenuItems.filter((e: any) => e?.id == id)
    //     console.log("check", Product)
    //     if (Product && Product?.length > 0) {
    //         setProductData(Product)
    //     }
    //     else {
    //         alert("not Founcd")
    //     }
    // }

    const Data = [
        "FREE gift packing with every order", "14 Days easy return", "In stock, ready to ship"
    ]
    console.log("datacheck", ProductData)

    return (
        <div className={styles.detail_div_main}>
            {
                ProductData?.map((e: any, i: number) => {
                    return (
                        <div className={styles.detail_div_container} key={i} >
                            <div className={styles.images_div}>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    direction="vertical"
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[Thumbs]}
                                    className={`w-25 h-[380px] thumbSwiper ${styles.customThumb}`}
                                >
                                    {e?.images.map((img: any, index: any) => (
                                        <SwiperSlide key={index}>
                                            <img src={img} alt={`thumb-${index}`} className="cursor-pointer object-cover" style={{ border: '1px solid #989898c6' }} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <Swiper
                                    modules={[Navigation, Autoplay, Thumbs, Pagination]}
                                    className={styles.swiper}
                                    loop={true}

                                    slidesPerView={1}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    simulateTouch={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        0: {
                                            autoplay: {
                                                delay: 2000,
                                                disableOnInteraction: false,
                                            },
                                        },
                                        768: {
                                            autoplay: false,
                                        }
                                    }}
                                >
                                    {e?.images && e?.images?.length > 0 && e?.images.map((item: any, index: any) => (
                                        <SwiperSlide key={index}>
                                            <div className={styles.product_swiper_image_div}>
                                                <img src={item} alt={e?.bike?.title} className={styles.image} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                            <div className={styles.detail_div_sec}>
                                <p className={styles.product_name}>{e?.title}</p>
                                <div className={styles.rating_div}>
                                    <Box sx={{ '& > legend': { mt: 2 } }}>
                                        <Rating name="read-only" value={value} readOnly />
                                    </Box> 3 reviews
                                </div>
                                <p className={styles.price}><del>Rs.{e?.variants[0]?.compare_at_price}.00</del> Rs.{e?.variants[0]?.price}.00 <span className={styles.save_price}> Save Rs.{e?.variants[0]?.compare_at_price - e?.variants[0]?.price}.00</span></p>
                                <span className={styles.save_price_mobile}> Save Rs.{e?.variants[0]?.compare_at_price - e?.variants[0]?.price}.00</span>
                                <div className={styles.note_div}>
                                    {
                                        e?.notice?.map((e: string, i: number) => {
                                            return (
                                                <p className={styles.notice_} key={i}>{e}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.button_div}>
                                    <button className={`${styles.button} ${styles.addtocart}`} >ADD TO CART</button>
                                    <button className={`${styles.button} ${styles.buyitnow}`} >BUY IT NOW</button>
                                    <button className={`${styles.button} ${styles.onwhatsapp}`} >DETAILS ON WHATSAPP</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {/* </div> */}
        </div>
    )
}
export default ProductDetail