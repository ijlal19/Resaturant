import React from "react";
import styles from './allProductIndex.module.scss';
import Data from "./data";
import Product_card_Panel from "./card/cardIndex";

let DropDownData = [
    {
        id: 1,
        val: "men",
        name: "Men",
    },
    {
        id: 1,
        val: "women",
        name: "Women",
    },
    {
        id: 1,
        val: "kids",
        name: "Kids",
    },
]

const All_Prodcut_Panel = () => {
    return (
        <div className={styles.product_main_div}>
            <div className={styles.header}>
                <input type="text" placeholder="Search By Name" className={styles.input} />
                <select name="" id="" className={styles.select_main}>
                    <option value="" selected hidden  >Select Category</option>
                    {
                        DropDownData?.map((e: any, index: number) => {
                            return (
                                <option value={e?.val} className={styles.option} >{e?.name}</option>
                            )
                        })
                    }
                </select>
                <button className={styles.add_perfume_btn} >Add New Perfume</button>
            </div>
            <div className={styles.product_container_div}>
                {
                    Data?.map((e:any , i:number ) => {
                        return(
                            <div>
                                <Product_card_Panel props={e} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default All_Prodcut_Panel