import react from 'react';
import styles from './websiteBestSellerIndex.module.scss';
import BestSellerCard from './bestSellerCard/bestSellerCardIndex';

interface DataType {
    img: string,
    title: string,
    price: string
}

const WebsiteBestSellerIndex = () => {
    const Data = [
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem ipsum amet",
            price: "400"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem ipsum sit amet",
            price: "400"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Amet sit",
            price: "400"
        },
        {
            img: "https://www.kfcpakistan.com/images/65428500-ea56-11ef-bf82-75f537a23a2b-Mighty_variant_0-2025-02-13220345.png",
            // img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            // img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem  dolor sit",
            price: "4001"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem  dolor sit",
            price: "400"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem  dolor sit",
            price: "4598"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem  dolor sit",
            price: "400"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "Lorem  dolor sit",
            price: "400"
        },
        {
            img: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
            title: "dolor sit amet",
            price: "400"
        },
    ]
    return (
        <div className={styles.best_seller_div_main}>
            <div className={styles.best_seller_div_container}>
                <p className={styles.heading}><span className={styles.best}>BEST</span> SELLERS</p>
                <div className={styles.card_section}>
                    {
                        Data.map((item: DataType, index: number) => {
                            return (
                                <BestSellerCard props={item} key={index} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default WebsiteBestSellerIndex;