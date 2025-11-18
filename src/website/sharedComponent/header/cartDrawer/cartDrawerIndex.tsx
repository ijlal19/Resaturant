import styles from './cartDrawerIndex.module.scss';
import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import { Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface HeaderDrawerProps {
    Open: boolean;
    Close: () => void;
}

const fakeCartData = [
    {
        id: 1,
        image:
            "https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=360",
        title: "Perfect Duo Perfume 2.0",
        quantity: 1,
        retailPrice: 3500,
        salePrice: 2999,
    },
    {
        id: 2,
        image:
            "https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=360",
        title: "Classic Oud Fragrance",
        quantity: 2,
        retailPrice: 4500,
        salePrice: 3899,
    },
    // {
    //     id: 3,
    //     image:
    //         "https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=360",
    //     title: "Signature Musk Collection",
    //     quantity: 1,
    //     retailPrice: 5000,
    //     salePrice: 4299,
    // },
    {
        id: 4,
        image:
            "https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=360",
        title: "Luxury Arabian Scent",
        quantity: 3,
        retailPrice: 3200,
        salePrice: 2799,
    },
];


const Cart_Drawer = ({ Open, Close }: HeaderDrawerProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <div className={styles.drawer_list_main} role="presentation" onClick={toggleDrawer(false)}>
            <div className={styles.heading_div}>
                <p className={styles.heading}>CART</p>
                <button className={styles.close_btn} onClick={Close}>
                    <CloseIcon className={styles.icon} />
                </button>
            </div>
            <div className={styles.cart_item_div}>
                {
                    fakeCartData.length > 0 ?
                        (fakeCartData?.map((item: any, index: number) => {
                            return (
                                <div className={styles.item_cart} key={index}>
                                    <Link href="#" className={styles.image_div}>
                                        <img src={item?.image} alt="" className={styles.product_image} />
                                    </Link>
                                    <div className={styles.detail_div}>
                                        <Link href="#" className={styles.title}>{item?.title}</Link>
                                        <div className={styles.quantity_div_main}>
                                            <div className={styles.quantity_div}>
                                                {
                                                    item?.quantity === 1 ?
                                                        <button className={styles.action_btn}>
                                                            <DeleteOutlineOutlinedIcon className={styles.action_icon} />
                                                        </button>
                                                        :
                                                        <button className={styles.action_btn}>
                                                            <RemoveIcon className={styles.action_icon} />
                                                        </button>
                                                }
                                                <p className={styles.qt_number}>{item?.quantity || 1}</p>
                                                <button className={styles.action_btn}>
                                                    <AddIcon className={styles.action_icon} />
                                                </button>
                                            </div>
                                            <p className={styles.amount}>Rs {item?.salePrice}.00</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })) : <p>No Item Add</p>
                }
            </div>
            <div className={styles.total_side}>
                <div className={styles.subtotal_div_main}>
                    <div className={styles.heading}>
                        <p className={styles.subtotal_heading}>Subtotal</p>
                        <p className={styles.total_price}>Rs 800.00</p>
                    </div>
                    <p className={styles.end_text}>Shipping, taxes, and discount codes calculated at checkout.</p>
                    <Link href="/cart" className={styles.checkout_button}>CHECK OUT</Link>
                </div>
            </div>
        </div>
    );
    return (
        <div className={styles.drawer_main}>
            <Drawer open={Open} onClose={Close} anchor="right">
                {DrawerList}
            </Drawer>
        </div>
    )
}
export default Cart_Drawer