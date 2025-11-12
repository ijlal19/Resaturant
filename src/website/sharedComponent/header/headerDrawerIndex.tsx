import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import styles from './webHeaderIndex.module.scss';
import { Divider, Link } from '@mui/material';
import LoginPopup from '../websiteLoginPopup/loginPopupIndex';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

interface HeaderDrawerProps {
    Open: boolean;
    Close: () => void;
}

const Relative = [
    {
        name: "Store Locator",
        img: "https://www.kfcpakistan.com/static/media/Store-Locator.f6a5770e5b27f36c215d.jpg",
    },
    {
        name: "Track Order",
        img: "https://www.kfcpakistan.com/static/media/Store-Locator.f6a5770e5b27f36c215d.jpg",
    },
    {
        name: "Explore Menu",
        img: "https://www.kfcpakistan.com/static/media/Store-Locator.f6a5770e5b27f36c215d.jpg",
    },
]

const Fache = [
    {
        name: "Home"
    },
    {
        name: "All Perfumes"
    },
    {
        name: "Crazy Deals"
    },
    {
        name: "11.11 Sale"
    },
    {
        name: "About us"
    },
    {
        name: "Contact Us"
    }
]

export default function HeaderDrawer({ Open, Close }: HeaderDrawerProps) {
    const [open, setOpen] = React.useState(false);
    const [openPopup, setOpenPopup] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };
    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const DrawerList = (
        <div className={styles.drawer_list_main} role="presentation" onClick={toggleDrawer(false)}>
            <div className={styles.logo_div}>
                <img src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=320" alt="" className={styles.logo} />
                <button className={styles.close_btn} onClick={Close}>
                    <ArrowBackIosNewOutlinedIcon className={styles.icon} />
                </button>
            </div>
            <hr className={styles.hr} />
            <ul className={styles.unorder_list}>
                {
                    Fache?.map((e: any, index: number) => {
                        return (
                            <li className={styles.li} key={index}>
                                <Link href="#" className={styles.link}>
                                    {e?.name}
                                </Link>
                            </li>
                            // <span className={styles.divider}></span>
                        )
                    })
                }
            </ul>
        </div>
    );

    return (
        <div>
            <Drawer open={Open} onClose={Close}>
                {DrawerList}
            </Drawer>
            <LoginPopup Open={openPopup} Close={handleClosePopup} />
        </div>
    );
}
