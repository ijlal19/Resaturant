import React from "react";
import styles from './cardIndex.module.scss';

const Product_card_Panel = ({ props }: any) => {
    return (
        <div className={styles.cart_main_div}>
            <img src={props?.image} alt="" className={styles.product_image} />
            <div className={styles.product_detail}>
                <div className={styles.detail}>
                    <p className={styles.title}><span className={styles.field_name}>Name:</span> {props?.name}</p>
                    <p className={styles.title}><span className={styles.field_name}>Brand:</span> {props?.brand}</p>
                    <p className={styles.title}><span className={styles.field_name}>Category:</span> {props?.category}</p>
                    <p className={styles.title}><span className={styles.field_name}>Price:</span> {props?.price}</p>
                    <p className={styles.title}><span className={styles.field_name}>Sale-Price:</span> {props?.discountPrice}</p>
                    <p className={styles.title}><span className={styles.field_name}>In Stock:</span> {props?.stock}</p>
                    <p className={styles.title}><span className={styles.field_name}>Sold This Month:</span> {props?.soldThisMonth}</p>
                    <p className={styles.title}><span className={styles.field_name}>Status:</span> {props?.status}</p>
                </div>
                <div className={styles.action_btn}>
                    <button className={styles.edit_btn}>EDIT</button>
                    <button className={styles.del_btn}>DELETE</button>
                </div>
            </div>
        </div>
    )
}
export default Product_card_Panel

// id: 1,
// name: "Dior Sauvage",
// brand: "Dior",
// category: "Men",
// description: "A fresh and bold fragrance perfect for men.",
// price: 28000,
// discountPrice: 25000,
// image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
// stock: 15,
// rating: 4.8,
// reviewCount: 342,
// status: "active",
// soldThisMonth: 58,
// createdAt: "2025-01-12"