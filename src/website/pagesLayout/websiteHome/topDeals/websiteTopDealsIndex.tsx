import WebsiteDealCard from './topDealsCard/topDealCardIndex';
import react from './websiteTopDealsIndex.module.scss';
import styles from './websiteTopDealsIndex.module.scss';

interface DataType {
    img: string,
    title: string,
    price: string
}

const WebsiteTopDeals = () => {
    const Data = [
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
        <div className={styles.top_deals_div_main}>
            <div className={styles.top_deals_div_container}>
                <p className={styles.heading}><span className={styles.top}>TOP</span> DEALS</p>
                <div className={styles.card_section}>
                    {
                        Data.map((item :DataType , index :number) => {
                            return (
                                <WebsiteDealCard props={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default WebsiteTopDeals