'use client';
import React, { useState } from "react";
import styles from './trackOrderPageIndex.module.scss';

const TrackOrderPageIndex = () => {

    const [OrderNumber, setOrderNumber] = useState(true);
    const [UserOrderNumber, setUserOrderNumber] = useState();
    const [UserMobileNumber, setUserMobileNumber] = useState();
    const [UserTrackingNumber, setUserTrackingNumber] = useState();

    const handleChangeState = (type: string) => {
        if (type === "Order") {
            setOrderNumber(true);
        } else {
            setOrderNumber(false);
        }
    }

    const HandleONchange = (e: any, from: string) => { 
        if (from === "OrderNumber") {
            setUserOrderNumber(e.target.value);
        }
        else if (from === "MobileNumber") {
            setUserMobileNumber(e.target.value);
        }
        else {
            setUserTrackingNumber(e.target.value);
        }
    }

    const handleSubmit = (e : any , from: any) => {
        e.preventDefault()
        if(from === "OrderForm"){
            const obj = {
                UserOrderNumber,
                UserMobileNumber
            }
            console.log("Check" , obj);
        }
        else if(from === "trackForm"){
            const obj = {
                UserTrackingNumber
            }
            console.log("Check" , obj);
        }
    }


    return (
        <div className={styles.track_order_main_div}>
            <p className={styles.heading}>Track Order</p>
            <div className={styles.track_order_div}>
                <p className={styles.track_heading}>Track Your Order</p>
                <div className={styles.tab_button_div}>
                    <button className={OrderNumber ? styles.active_btn : styles.simple_button} onClick={() => handleChangeState("Order")}>Order Number</button>
                    <button className={!OrderNumber ? styles.active_btn : styles.simple_button} onClick={() => handleChangeState("tracking")} >Tracking Number</button>
                </div>
                {
                    OrderNumber ?
                        <form className={styles.order_form} onSubmit={(e) => handleSubmit(e,"OrderForm")}>
                            <input type="text" placeholder="Order Number" value={UserOrderNumber} className={styles.input} onChange={(e) => HandleONchange(e, "OrderNumber")} />
                            <input type="text" placeholder="Mobile Number" value={UserMobileNumber} className={styles.input} onChange={(e) => HandleONchange(e, "MobileNumber")} />
                            <button className={styles.track_button} type="submit">Track</button>
                        </form> :
                        <form className={styles.order_form} onSubmit={(e) => handleSubmit(e,"trackForm")}>
                            <input type="text" placeholder="Tracking Number" value={UserTrackingNumber} className={styles.input} onChange={(e) => HandleONchange(e, "TrackingNumber")} />
                            <button className={styles.track_button} type="submit">Track</button>
                        </form>
                }
            </div>
        </div>
    )
}
export default TrackOrderPageIndex;