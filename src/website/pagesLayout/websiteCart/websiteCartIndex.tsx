import React from "react";
import styles from './websiteCartIndex.module.scss';
import { Link } from "@mui/material";
import { kfcMenuItems } from "./data";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const WebsiteCartPage = () => {
    return (
        <div className={styles.cart_div_main}>
            <div className={styles.cart_div_container}>
                <div className={styles.heading_div}>
                    <p className={styles.page_heading}>CART</p>
                    <Link href="#" className={styles.link}>Continue Shopping</Link>
                </div>
                <div className={styles.cart_section_div}>
                    <div className={styles.cart_side}>
                        {
                            kfcMenuItems?.length > 0 ?
                                kfcMenuItems?.map((e: any, i: number) => {
                                    return (
                                        <div className={styles.product_cart} key={i}>
                                            <img src={e?.img} alt="" className={styles.product_image} />
                                            <div className={styles.detail_div}>
                                                <div className={styles.title_div}>
                                                    <p className={styles.title}>{e?.title}</p>
                                                    <div className={styles.quantity_div}>
                                                        {
                                                            e?.qt === 1 ?
                                                                <button className={styles.action_btn}>
                                                                    <DeleteIcon className={styles.action_icon} />
                                                                </button>
                                                                :
                                                                <button className={styles.action_btn}>
                                                                    <RemoveIcon className={styles.action_icon} />
                                                                </button>
                                                        }
                                                        <p className={styles.qt_number}>{e?.qt || "1"}</p>
                                                        <button className={styles.action_btn}>
                                                            <AddIcon className={styles.action_icon} />
                                                        </button>
                                                    </div>
                                                    <Link href="#" className={styles.remove}>Remove</Link>
                                                </div>
                                                <div className={styles.amount}>Rs {e?.price}.00</div>
                                            </div>
                                        </div>
                                    )
                                }) : "No Data"
                        }
                    </div>
                    <div className={styles.total_side}>
                        <div className={styles.subtotal_div_main}>
                            <div className={styles.heading}>
                                <p className={styles.subtotal_heading}>Subtotal</p>
                                <p className={styles.total_price}>Rs 800.00</p>
                            </div>
                            <button className={styles.checkout_button}>CHECK OUT</button>
                            <p className={styles.end_text}>Shipping, taxes, and discount codes calculated at checkout.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WebsiteCartPage

// <p className={styles.div_inner_heading}><div className={styles.icon_box}><ArrowBackIosNewIcon className={styles.icon} /></div>Items From Your Cart</p>