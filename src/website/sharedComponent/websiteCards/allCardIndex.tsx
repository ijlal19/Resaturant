import React from "react";
import styles from './allCardIndex.module.scss';

interface Data {
    props: {
        img: String,
        title: String,
        retail_price : number,
        sale_price : number
    }
}

const CardOne = ({ props }: Data) => {
    return (
        <div className={styles.card_div_main}>
            <img src={`${props?.img}`} alt="" className={styles.image} />
            <p className={styles.title}>{props?.title}</p>
            <p className={styles.price}><del>Rs.{props?.retail_price} </del> Rs.{props?.sale_price}</p>
            <p className={styles.saveprice}>Save Rs.{props?.retail_price - props?.sale_price}.00</p>
            <button className={styles.add_cart_button}>Add to Cart</button>
        </div>
    )
}
export  {CardOne}