import React from "react";
import styles from './exploreMenuCard.index.module.scss'

interface Data {
    props: {
        img: String,
        title: String
    }
}

const ExploreMenuCard = ({ props }: Data) => {
    return (
        <div className={styles.card_div_main}>
            <img src="https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9a86-dbbfcb55fbdd-FF2GT-2025-08-11075548.png" alt="" className={styles.image} />
            <p className={styles.title}>{props?.title}</p>
            <p className={styles.circle_div}>
                <span className={styles.circle_div_inner}></span>
            </p>
        </div>
    )
}
export default ExploreMenuCard