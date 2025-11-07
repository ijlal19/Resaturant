'use client'
import react from 'react';
import styles from './menuPageCardIndex.module.scss';
import { Link, useMediaQuery } from '@mui/material';
interface DataType {
    props: {
        img: string,
        title: string,
        price: string,
        description: string
    }
}

const MenuPage_Product_Card = ({ props }: DataType) => {
    const isMobile = useMediaQuery('(max-width:768px)')

    function Add3Dots(str: any, limit: any) {
        var dots = " ... ";
        if (str?.length > limit) {
            str = str.substring(0, limit) + dots;
        }
        return str;
    }

    const getHref =(data:any) => {
        if (!data || !data.title) return '';
        const formattedTitle = data.title.trim().replace(/\s+/g, '-').toLowerCase();
        return `/product/${formattedTitle}/${data?.id}`;
    }

    return (
        <div className={styles.card_div_main}>
            <Link href={getHref(props)} className={styles.image_div}>
                <img src={props?.img} alt="" className={styles.card_image} />
            </Link>
            <div className={styles.card_div_content}>
                <p className={styles.card_title}>{props?.title}</p>
                <p className={styles.card_detail}>{`${Add3Dots(props?.description, isMobile ? 40 : 60)}`}</p>
                <p className={styles.price}>Rs {props?.price}</p>
                <button className={styles.addtocart_button} >ADD TO BUCKET</button>
            </div>
        </div>
    )
}
export default MenuPage_Product_Card;