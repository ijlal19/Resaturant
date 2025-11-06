import React from "react";
import styles from './websiteCartIndex.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const WebsiteBucketPage = () => {
    return (
        <div className={styles.bucket_div_main}>
            <div className={styles.bucket_div_container}>
                <div className={styles.right_side_div}>
                    <div className={styles.your_item_cart_div}>
                        <p className={styles.div_inner_heading}><div className={styles.icon_box}><ArrowBackIosNewIcon className={styles.icon} /></div>Items From Your Cart</p>
                        <div className={styles.menu_div}>
                            <img src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png" alt="" className={styles.menu_image} />
                            <p className={styles.note}>You haven’t added any items in bucket yet</p>
                            <Link href="" className={styles.menu_button}>EXPLORE MENU</Link>
                        </div>
                    </div>
                    {/* <div className={styles.you_donate_div}>
                        <p className={styles.div_inner_heading}><span className={styles.icon_box}><ArrowBackIosIcon className={styles.icon} /></span>You may also Donate</p>
                        <div className={styles.bhook_mitao_div}>
                            <img src="https://www.kfcpakistan.com/static/media/mitao-bhook-light.bb15764ef9a237fa8903.png" alt="" className={styles.image} />
                            <p className={styles.tag}>Join the movement to champion deaf inclusion and empower the education of Pakistan's youth.</p>

                            <div className={styles.donate_btn_box}>
                                <div className={styles.donate_inner}>
                                    <button className={styles.sign_btn}><RemoveIcon className={styles.icon}/></button>
                                    <p className={styles.donate_price}>Rs 20</p>
                                    <button className={styles.sign_btn}><AddIcon className={styles.icon}/></button>
                                </div>
                                <button className={styles.donate_btn}>DONATE NOW</button>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* <div className={styles.left_side_div}></div> */}
            </div>
        </div>
    )
}
export default WebsiteBucketPage