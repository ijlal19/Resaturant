import React from "react";
import styles from './websiteMenuSectionIndex.module.scss';
import { Link } from "@mui/material";

interface DataType {
    url: String
}

const WebsiteMenuSection = () => {
    const Data = [
        { url: "https://www.kfcpakistan.com/static/media/pickup.a1ba2c21d4d480d9de3a.jpg" },
        { url: "https://www.kfcpakistan.com/static/media/mitaoBhook.22dd9e0f28c298811242.jpg" },
        { url: "https://www.kfcpakistan.com/static/media/downloadApp.fb1cf20145aa7fa4225e.png" },
        { url: "https://www.kfcpakistan.com/static/media/explore_new.dd614d3889384f4db081.jpg" }
    ]
    return (
        <div className={styles.menu_div_main}>
            <div className={styles.menu_div_container}>
                {
                    Data?.map((item: DataType, index: number) => {
                        return (
                            <Link href="#" className={styles.image_box} key={index} >
                                <img src={`${item?.url}`} alt="" className={styles.image} />
                                <p className={styles.title}>Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
                                <Link href="#" className={styles.menu_button} >EXPLORE MENU</Link>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WebsiteMenuSection