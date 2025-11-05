'use client'
import React, { useEffect, useRef, useState } from "react";
import styles from './websiteMenuIndex.module.scss';
import { kfcMenuData } from "./data";
import MenuPage_Product_Card from "./menuPageCard/menuPageCardIndex";
import { Link } from "@mui/material";

interface MenuItem {
    title: string;
    price: string;
    description: string;
    img: string;
}

interface MenuCategory {
    category: string;
    items: MenuItem[];
}
const WebsiteMenuPage = () => {

    const [activeCategory, setActiveCategory] = useState<string>(kfcMenuData[0]?.category || "");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    const category = visibleSection.target.getAttribute("data-category");
                    if (category) {
                        setActiveCategory(category);
                    }
                }
            },
            {
                root: null,
                threshold: 0.3,
            }
        );

        kfcMenuData.forEach((section: any) => {
            const el = sectionRefs.current[section.category];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        const el = sectionRefs.current[category];
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    return (
        <div className={styles.menu_div_main}>
            <div className={styles.menu_div_container}>

                <div className={styles.menu_category_div}>
                    {
                        kfcMenuData?.map((e: MenuCategory, index: number) => {
                            return (
                                <p className={`${styles.category_name} ${activeCategory === e.category ? styles.active_category : ""}`} key={index} onClick={() => handleCategoryClick(e.category)} >
                                    {e?.category}
                                </p>
                            )
                        })
                    }
                </div>

                <div className={styles.menu_card_section_div}>
                    <div className={styles.card_div_main}>
                        {
                            kfcMenuData?.map((e: MenuCategory, index: number) => {
                                return (
                                    <div className={styles.category_section_div}
                                        key={index}
                                        ref={(el: any) => (sectionRefs.current[e?.category] = el)}
                                        data-category={e?.category}>
                                        <p className={styles.heading}><span className={styles.best}>{e?.category.slice(0, 4)}</span>{e?.category.slice(4)}</p>
                                        <div className={styles.category_card_div}>
                                            {
                                                e?.items?.map((e: MenuItem, index: number) => {
                                                    return (
                                                        <MenuPage_Product_Card props={e} key={index} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.bucket_section_div}>
                        <div className={styles.bucket_div}>
                            <p className={styles.item_count}>0 Item Added</p>

                            <div className={styles.bucket_image_div_main}>
                                <div className={styles.bucket_image_div_container}>
                                    <img src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png" alt="" className={styles.bucket_image} />
                                    <p className={styles.note}>You haven’t added any items in bucket yet</p>
                                </div>
                            </div>
                            <Link href="/bucket" className={styles.view_bucket_div}>
                                <p className={styles.item_}>0 Item <span className={styles.price}>| Rs 0</span></p>
                                <p className={styles.view_bucket_btn}>View Bucket</p>
                            </Link>
                    </div>
                </div>
            </div>

        </div>
        </div >
    )
}
export default WebsiteMenuPage