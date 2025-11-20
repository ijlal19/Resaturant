'use client'
import React, { useState } from "react";
import styles from './checkoutPageIndex.module.scss';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Collapse, Link, List, ListItemButton, ListItemText } from "@mui/material";
import Data from './data';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface DataType {
    img: string;
    title: string;
    price: number;
    quantity: number;
}

const CheckOut_Page = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.checkout_main_div}>
            <div className={styles.checkout_header_div}>
                <div className={styles.checkout_header}>
                    <img src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=320" alt="Logo" className={styles.logo_image} />
                    <Link href="/cart" className={styles.icon_button} >
                        <ShoppingBagOutlinedIcon className={styles.icon} />
                    </Link>
                </div>
            </div>
            <div className={styles.checkout_container_div}>
                <List
                    sx={{ width: '100%', maxWidth: "360px", bgcolor: 'white', marginTop: "10px" }}
                    component="nav"
                    className={styles.lis_signup}>
                    <ListItemButton onClick={handleClick} sx={{ borderBottom: '1px solid #aca9a9ac' }}>
                        <ListItemText primary="Order Summary" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <div className={styles.order_detail_div_mobile}>
                                <div className={styles.product_div}>
                                    {
                                        Data?.map((item: DataType, index: number) => {
                                            return (
                                                <div className={styles.single_product_div} key={index}>
                                                    <img src={item?.img} alt="" className={styles.logo_image} />
                                                    <div className={styles.price_div}>
                                                        <p className={styles.title}>{item?.title} <span className={styles.qt} >QT.{item?.quantity}</span></p>
                                                        <p className={styles.price}>Rs.{item?.price * item?.quantity}.00</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.coupon_div}>
                                    <input type="text" placeholder="Discount Code" className={styles.code_input} />
                                    <button className={styles.apply_buttton} >Apply</button>
                                </div>
                                <div className={styles.subtotal_div}>
                                    <p className={styles.total_items}>Subtotal · 8 items <span> Rs.20,100.00</span></p>
                                    <p className={styles.total_items}>Shipping <span> <del>Rs.200.00</del> Free</span></p>
                                    <p className={styles.free_shipin_heading}>BUY 2 FREE SHIPPING</p>
                                    <p className={styles.total_price_tag}>Total <span className={styles.amount_digit}><sub>PKR </sub> <b> Rs.24,760.00</b></span></p>
                                </div>
                            </div>
                        </List>
                    </Collapse>
                </List>
                <div className={styles.contact_detail_div}>
                    <div className={styles.email_me_div}>
                        <p className={styles.contact_heading}>Contact <Link href="#" className={styles.signin}>Sign in</Link></p>
                        <input type="text" placeholder="Email or mobile phone number" className={styles.email_input} />
                        <div className={styles.check_box}>
                            <input type="checkbox" className={styles.checkbox_input} />
                            <p>Email me with news and offers</p>
                        </div>
                    </div>
                    <div className={styles.deliver_div}>
                        <p className={styles.delivery_heading}>Delivery</p>
                        <form className={styles.delivery_form}>
                            <div className={styles.input2_div}>
                                <input type="text" placeholder="First Name" className={styles.short_input} />
                                <input type="text" placeholder="Last Name" className={styles.short_input} />
                            </div>
                            <input type="text" placeholder="Address" className={styles.long_input} />
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className={styles.long_input} />
                            <div className={styles.input2_div}>
                                <input type="text" placeholder="City" className={styles.short_input} />
                                <input type="text" placeholder="Postal Code (optional)" className={styles.short_input} />
                            </div>
                            <input type="text" placeholder="Phone" className={styles.long_input} />
                            <div className={styles.check_box}>
                                <input type="checkbox" className={styles.checkbox_input} />
                                <p>
                                    Save this information for next time</p>
                            </div>
                            <button className={styles.complete_button}>Complete Order</button>
                        </form>
                    </div>
                </div>
                <div className={styles.order_detail_div}>
                    <div className={styles.product_div}>
                        {
                            Data?.map((item: DataType, index: number) => {
                                return (
                                    <div className={styles.single_product_div} key={index}>
                                        <img src={item?.img} alt="" className={styles.logo_image} />
                                        <div className={styles.price_div}>
                                            <p className={styles.title}>{item?.title} <span className={styles.qt} >QT.{item?.quantity}</span></p>
                                            <p className={styles.price}>Rs.{item?.price * item?.quantity}.00</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.coupon_div}>
                        <input type="text" placeholder="Discount Code" className={styles.code_input} />
                        <button className={styles.apply_buttton} >Apply</button>
                    </div>
                    <div className={styles.subtotal_div}>
                        <p className={styles.total_items}>Subtotal · 8 items <span> Rs.20,100.00</span></p>
                        <p className={styles.total_items}>Shipping <span> <del>Rs.200.00</del> Free</span></p>
                        <p className={styles.free_shipin_heading}>BUY 2 FREE SHIPPING</p>
                        <p className={styles.total_price_tag}>Total <span className={styles.amount_digit}><sub>PKR </sub> <b> Rs.24,760.00</b></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut_Page;