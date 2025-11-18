import react from "react";
import styles from './searchPageIndex.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search_Page = () => {
    return (
        <div className={styles.search_main_div}>
            <div className={styles.search_container_div}>
                <div className={styles.search_div}>
                    <div className={styles.input_div}>
                        <input type="text" placeholder="Search..." className={styles.input} />
                        <button className={styles.button}><SearchIcon /></button>
                    </div>
                    <button className={styles.buttonclose}><CloseIcon /></button>
                </div>
            </div>
        </div>
    )
}
export default Search_Page;