import react from 'react';
import styles from './bestSellerCardIndex.module.scss';

interface CardDataTypes {
    props: {
        img: string;
        title: string;
        price: string;
    }
}

const BestSellerCard = ({ props }: CardDataTypes) => {
    return (
        <div className={styles.best_seller_card_main}>
            <p className={styles.title}>{props?.title || "Lorem ipsum dolor sit amet"}</p>
            <div className={styles.price_tag_div}>
                <p className={styles.priceTag}><span className={styles.rs}>Rs</span> {props?.price}</p>
            </div>
            <img src={props?.img} alt="" className={styles.food_image} />
        </div>
    )
}
export default BestSellerCard;