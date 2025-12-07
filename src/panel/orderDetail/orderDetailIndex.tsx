import React from "react";
import styles from './orderDetailIndex.module.scss';
import orders from "./data";
import { Link } from "@mui/material";

const Order_detail_page = () => {

    let DropDownData = [
        {
            id: 1,
            val: "pending",
            name: "Pending",
        },
        {
            id: 2,
            val: "complete",
            name: "Complete",
        },
        {
            id: 3,
            val: "cancel",
            name: "Cancel",
        },
        {
            id: 4,
            val: "return",
            name: "Return",
        },
        {
            id: 5,
            val: "ontheway",
            name: "ON The Way",
        },
    ]

    return (
        <div className={styles.orderdetail_main_div}>
            <div className={styles.header}>
                <select name="" id="" className={styles.select_main}>
                    <option value="" selected hidden  >Select Order Status</option>
                    {
                        DropDownData?.map((e: any, index: number) => {
                            return (
                                <option value={e?.val} className={styles.option} >{e?.name}</option>
                            )
                        })
                    }
                </select>
                <input type="text" placeholder="Search By ID" className={styles.input} />
                {/* <button className={styles.add_perfume_btn} >Add New Perfume</button> */}
            </div>
            <div className={styles.table_section}>
                <table className={styles.table_main}>
                    <thead className={styles.thead}>
                        <tr>
                            <td className={styles.td}>Product Image</td>
                            <td className={styles.td}>Product Name</td>
                            <td className={styles.td}>Order ID</td>
                            <td className={styles.td}>Quantity</td>
                            <td className={styles.td}>Total Price</td>
                            <td className={styles.td}>Status</td>
                            <td className={styles.td}>Action</td>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {
                            orders?.map((e: any, i: any) => {
                                return (
                                    <tr key={i}>
                                        <td className={styles.td}>
                                            <img src={e?.productImage} alt="" className={styles.image} />
                                        </td>
                                        <td className={styles.td}>{e?.products[0]?.title}</td>
                                        <td className={styles.td}>11001</td>
                                        <td className={styles.td}>{e?.itemsCount}</td>
                                        <td className={styles.td}>{e?.total}</td>
                                        <td className={styles.td}>{e?.status}</td>
                                        <td className={styles.td}>
                                            <Link href="#">view</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Order_detail_page;