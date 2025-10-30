import react from 'react';
import styles from './topDealCardIndex.module.scss';

const WebsiteDealCard = () => {

    return(
        <div className={styles.card_div_main}>
            <img src="https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png" alt="" className={styles.card_image} />
            <div className={styles.card_div_content}>
                <p className={styles.card_title}>Xtreme Duo Box</p>
                <p className={styles.card_detail}>The irresistible combo of 2 Signature Zingers + 2 pcs Hot &...</p>
                <p className={styles.price}>Rs 1560</p>
                <button className={styles.addtocart_button}>+ ADD TO BUCKET</button>
            </div>
        </div>
    )
}
export default WebsiteDealCard;