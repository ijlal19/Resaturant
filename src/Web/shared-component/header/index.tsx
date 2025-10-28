'use client'
import react, { useState } from 'react';
import styles from './index.module.scss';
import { Link } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Header = () => {
    const [value, setValue] = useState("");

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header_top}>
                    <img src="https://www.foodpanda.com/wp-content/uploads/2024/05/foodpanda-logo-RGB-horizontal.png" alt="" className={styles.logo} />
                    <div className={styles.nav_options_box}>
                        <select name="" id="" className={styles.drop_main}>
                            <option value="" selected hidden className={styles.options1}><PermIdentityIcon />User Name</option>
                            <option value="" className={styles.options}><PermIdentityIcon />User Name1</option>
                            <option value="" className={styles.options}>User Name2</option>
                        </select>
                        <select name="" id="" className={styles.drop_main}>
                            <option value="" selected hidden className={styles.options}><LanguageIcon />EN</option>
                            <option value="" className={styles.options}>en</option>
                            <option value="" className={styles.options}>em</option>
                        </select>
                        {/* <FormControl fullWidth>
                            <InputLabel>Select Option</InputLabel>
                            <Select
                                value={value}
                                label="Select Option"
                                onChange={(e) => setValue(e.target.value)}
                            >
                                <MenuItem value="home">
                                    <HomeIcon style={{ marginRight: 8 }} /> Home
                                </MenuItem>
                                <MenuItem value="settings">
                                    <SettingsIcon style={{ marginRight: 8 }} /> Settings
                                </MenuItem>
                            </Select>
                        </FormControl> */}
                        <button className={styles.btn}><FavoriteBorderIcon sx={{fontSize:"20px",margin:'0px',padding:"0px"}} /></button>
                        <button className={styles.btn}><LocalMallIcon  sx={{fontSize:"20px",margin:'0px',padding:"0px"}}/></button>
                    </div>
                </div>
                <div className={styles.header_menu}>
                    <Link href="#" className={styles.linkst}><DeliveryDiningIcon sx={{fontSize:'30px',paddingRight:'5px'}} /> Delivery</Link>
                    <Link href="#" className={styles.links}><DirectionsRunIcon  sx={{fontSize:'30px',paddingRight:'5px'}}/> PickUp</Link>
                    <Link href="#" className={styles.links}><SellIcon  sx={{fontSize:'30px',paddingRight:'5px'}}/> Pandamart</Link>
                    <Link href="#" className={styles.links}><StorefrontIcon  sx={{fontSize:'30px',paddingRight:'5px'}}/> Shops</Link>
                    <Link href="#" className={styles.links}><DinnerDiningIcon  sx={{fontSize:'30px',paddingRight:'5px'}}/> Caterers</Link>
                </div>
            </div>
        </div>
    )
}
export default Header;