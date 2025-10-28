import react from 'react';
import styles from './index.module.scss';
import { Link } from '@mui/material';

const Header = () => {

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header_top}>
                    <img src="https://www.foodpanda.com/wp-content/uploads/2024/05/foodpanda-logo-RGB-horizontal.png" alt="" className={styles.logo} />
                    <div className={styles.nav_options_box}>
                        <select name="" id="" className={styles.drop_main}>
                            <option value="" selected hidden className={styles.options}>User Name</option>
                            <option value="" className={styles.options}>User Name1</option>
                            <option value="" className={styles.options}>User Name2</option>
                        </select>
                        <select name="" id="" className={styles.drop_main}>
                            <option value="" selected hidden className={styles.options}>EN</option>
                            <option value="" className={styles.options}>en</option>
                            <option value="" className={styles.options}>em</option>
                        </select>
                        <button className={styles.btn}>L</button>
                        <button className={styles.btn}>C</button>
                    </div>
                </div>
                <div className={styles.header_menu}>
                    <Link href="#" className={styles.linkst}>Delivery</Link>
                    <Link href="#" className={styles.links}>PickUp</Link>
                    <Link href="#" className={styles.links}>Pandamart</Link>
                    <Link href="#" className={styles.links}>Shops</Link>
                    <Link href="#" className={styles.links}>Caterers</Link>
                </div>
            </div>
        </div>
    )
}
export default Header;