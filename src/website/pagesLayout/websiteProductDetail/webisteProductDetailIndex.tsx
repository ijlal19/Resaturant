'use client'
import React, { useEffect, useState } from "react";
import styles from './websiteProductDetailIndex.module.scss';
import { kfcMenuItems } from "./data";
import { useParams } from "next/navigation";

interface DataType {
    img: string,
    title: string,
    price: string,
    id: string,
    description: string
}
 
const ProductDetail = () => {
    const [ProductData, setProductData] = useState<any>([])
    const { slug1 } = useParams()
    useEffect(() => {
        filterProduct(slug1)
    }, [])

    const filterProduct = (id: any) => {

        const Product = kfcMenuItems.filter((e: any) => e?.id == id)
        console.log("check", Product)
        if (Product && Product?.length > 0) {
            setProductData(Product)
        }
        else {
            alert("not Founcd")
        }
    }
    return (
        <div className={styles.detail_div_main}>
            {
                ProductData?.map((e: DataType, i: number) => {
                    return (
                        <div className={styles.detail_div_container} key={i} >
                            <div className={styles.image_box}>
                                <img src={e?.img} alt="" className={styles.img} />
                            </div>
                            <div className={styles.producy_detail_div}>
                                <p className={styles.title}>{e?.title || "N/A"}</p>
                                <p className={styles.price}>Rs {e?.price || '0'}</p>
                                <del className={styles.price1}>Rs 800</del>
                                <p className={styles.desc}>{e?.description || "No Description"}</p>
                                <button className={styles.add_to_btn}>Add To Cart</button>
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