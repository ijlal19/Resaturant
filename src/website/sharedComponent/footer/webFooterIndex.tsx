'use client';
import ListItemButton from '@mui/material/ListItemButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import styles from './webFooterIndex.module.scss';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

interface DataType {
    title: string,
    link: string
}

const LinkData = [
    {
        data: [
            { title: 'Track Order', link: '#' },
            { title: 'Search', link: '#' },
            { title: 'About Us', link: '#' },
            { title: 'Contact Us', link: '#' },
            { title: 'Blog', link: '#' },
            { title: 'Terms of Service', link: '#' },
        ]
    },
    {
        data: [
            { title: 'Monday - Saturday: 10am-10pm PST', link: '#' },
            { title: 'Address: A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi ', link: '#' },
            { title: 'UAE Address: 248,0,LOOTAH BLDG 0 Diera DXB', link: '#' },
            { title: 'WhatsApp us: 03268124613 Phone: 03012546333', link: '#' },
            { title: 'Customer Support: helloelyscents@gmail.com', link: '#' },
        ]
    },
]
const WebsiteFooter = () => {
    const PathName = usePathname()
    const [open, setOpen] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [IsFooterShow, setFooterShow] = useState(true);

    useEffect(() => {
        if (PathName?.includes('checkout')) {
            setFooterShow(false)
        }
        else {
            setFooterShow(true)
        }
    }, [])

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickSignup = () => {
        setOpenSignup(!openSignup);
    };
    return (
        <div className={styles.footer_div_main} style={{ display: IsFooterShow ? 'flex' : 'none' }}>
            <div className={styles.footer_div_container}>
                <div className={styles.social_link_div_main}>
                    <img src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=277" alt="" className={styles.logo_image} />
                </div>
                {
                    LinkData.slice(0, 1)?.map((item, index) => {
                        return (
                            <div className={styles.tab_link_div} key={index}>
                                <ul className={styles.list_style}>
                                    {
                                        item?.data?.map((linkItem: DataType, linkIndex: number) => {
                                            return (
                                                <li key={linkIndex}>
                                                    <Link href={linkItem?.link} className={styles.link_style}>{linkItem?.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
                {
                    LinkData.slice(1)?.map((item, index) => {
                        return (
                            <div className={styles.tab_link_div} key={index}>
                                <p className={styles.heading}>Chat With Us</p>
                                <ul className={styles.list_style}>
                                    {
                                        item?.data?.map((linkItem: DataType, linkIndex: number) => {
                                            return (
                                                <li key={linkIndex}>
                                                    <Link href={linkItem?.link} className={styles.link_style}>{linkItem?.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
                <div className={styles.signup_div}>
                    <p className={styles.heading}>SIGN UP AND SAVE</p>
                    <p className={styles.desc}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div className={styles.input_div}>
                        <input type="text" placeholder="Enter your email" className={styles.input} />
                        <button className={styles.icon}>
                            <SearchIcon />
                        </button>
                    </div>
                    <div className={styles.links_div}>
                        <Link href="#" className={styles.icon_div}><YouTubeIcon className={styles.icon} /></Link>
                        <Link href="#" className={styles.icon_div}><InstagramIcon className={styles.icon} /></Link>
                        <Link href="#" className={styles.icon_div}><FacebookIcon className={styles.icon} /></Link>
                    </div>
                </div>
                {/* MOBILE SCREEN DROP DOWN LIST SECTION */}
                <List
                    sx={{ width: '100%', maxWidth: "360px", bgcolor: 'white', marginTop: "10px" }}
                    component="nav"
                    className={styles.lis_signup}

                >
                    <ListItemButton onClick={handleClick} sx={{ borderBottom: '1px solid #aca9a9ac' }}>
                        <ListItemText primary="Chat With Us" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>
                                <ul className={styles.list_style1}>
                                    {
                                        LinkData[1]?.data?.map((linkItem: DataType, linkIndex: number) => {
                                            return (
                                                <li >
                                                    <Link href="#" className={styles.link_style}>{linkItem?.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                <List
                    sx={{ width: '100%', maxWidth: "360px", bgcolor: 'white', marginTop: "10px" }}
                    component="nav"
                    className={styles.lis_signup}
                >
                    <ListItemButton onClick={handleClickSignup} sx={{ borderBottom: '1px solid #aca9a9ac' }}>
                        <ListItemText primary="SIGN UP AND SAVE" />
                        {openSignup ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openSignup} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }}>
                                <div className={styles.signup_div_mobile}>
                                    <p className={styles.desc}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                                    <div className={styles.input_div}>
                                        <input type="text" placeholder="Enter your email" className={styles.input} />
                                        <button className={styles.icon}>
                                            <SearchIcon />
                                        </button>
                                    </div>
                                    <div className={styles.links_div}>
                                        <Link href="#" className={styles.icon_div}><YouTubeIcon className={styles.icon} /></Link>
                                        <Link href="#" className={styles.icon_div}><InstagramIcon className={styles.icon} /></Link>
                                        <Link href="#" className={styles.icon_div}><FacebookIcon className={styles.icon} /></Link>
                                    </div>
                                </div>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </div>
            {/* COPYRIGHT SECTION */}
            <div className={styles.copyright_div_main}>
                <p className={styles.copyright_text}>2025 Resturant. All right reserved</p>
                <p className={styles.powerdby_text}><span className={styles.span}>Powerd By</span><br /> Simplex Technology Solutions</p>
            </div>
        </div>
    )
}
export default WebsiteFooter;