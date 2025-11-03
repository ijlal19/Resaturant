'use client'
import react from 'react';
import styles from './menuPageCardIndex.module.scss';
// import add3Dots from '../../../../website/websiteFuctions/function.ts'
interface DataType {
    props: {
        img: string,
        title: string,
        price: string
    }
}

const MenuPage_Product_Card = ({ props }: DataType) => {

    return (
        <div className={styles.card_div_main}>
            <img src={props?.img} alt="" className={styles.card_image} />
            <div className={styles.card_div_content}>
                <p className={styles.card_title}>{props?.title}</p>
                {/* <p className={styles.card_detail}>{`${add3Dots('The irresistible combo of 2 Signature Zingers + 2 pcs Hot &...', 100)}`}</p> */}
                <p className={styles.price}>Rs {props?.price}</p>
                <button className={styles.addtocart_button}>+ ADD TO BUCKET</button>
            </div>
        </div>
    )
}
export default MenuPage_Product_Card;