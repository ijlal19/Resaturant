import React from "react";
import styles from "./orderConfirmationIndex.module.scss";
import userOrder from "./data";

const Order_Confirmation = () => {
    return (
        <div className={styles.order_main_div}>
            <div className={styles.header}>
                <p className={styles.text1}>Thank You For Your Order!</p>
                <p className={styles.text2}>Your order has been successfully placed.</p>
            </div>
            {
                userOrder?.map((e: any, i: any) => {
                    return (
                        <div className={styles.order_div_container}>
                            <div className={styles.customer_info}>
                                <div className={styles.info_div}>
                                    <p className={styles.heading}>Order Summary</p>
                                    <p className={styles.info_text}><span className={styles.span}>Order Id:</span> {e?.order?.orderId}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Status:</span> {e?.order?.status}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Order Date:</span> {e?.order?.orderDate}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Expected Delivery:</span> {e?.order?.deliveryTime}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Tracking Id:</span> {e?.order?.trackingNumber}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Payment Method:</span> {e?.order?.paymentMethod}</p>
                                </div>
                                <div className={styles.info_div}>
                                    <p className={styles.heading}>Customer Info</p>
                                    <p className={styles.info_text}><span className={styles.span}>Name:</span> {e?.firstName} {e?.lastName}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Phone:</span> {e?.phone}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Email:</span> {e?.email}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Address:</span> {e?.shippingAddress?.street}, {e?.shippingAddress?.city}, {e?.shippingAddress?.country} | {e?.shippingAddress?.zipCode}</p>
                                </div>
                                <div className={styles.info_div}>
                                    <p className={styles.heading}>Payment Summary</p>
                                    <p className={styles.info_text}><span className={styles.span}>Subtotal:</span> RS:{e?.order?.pricing?.subtotal}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Delivery Charges:</span> RS:{e?.order?.pricing?.shipping}</p>
                                    <p className={styles.info_text}><span className={styles.span}>Discount:</span> RS:{e?.order?.pricing?.discount}</p>
                                    <p className={styles.gt_text}><span className={styles.span}>Total:</span> RS:{e?.order?.pricing?.grandTotal}</p>
                                </div>
                            </div>
                            <div className={styles.item_div}>
                                {
                                    e?.order?.products?.map((item: any, i: any) => {
                                        return (
                                            <div className={styles.product_div}>
                                                <img src={item?.image} alt={item?.name} className={styles.image} />
                                                <div className={styles.product_info}>
                                                    <p className={styles.name}>{item?.name}</p>
                                                    <p className={styles.price}>Rs: {item?.price}</p>
                                                    <span className={styles.span}>qt: {item?.quantity}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Order_Confirmation;