'use client'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import LoginPopup from '../websiteLoginPopup/loginPopupIndex';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './webHeaderIndex.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeaderDrawer from './headerDrawerIndex';
import react, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import Data from './data';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Cart_Drawer from './cartDrawer/cartDrawerIndex';
import { useRouter } from 'next/navigation';


interface DataType {
    messgae: string,
    color: string,
    toggle: boolean,
    rotation: number
}

const WebsiteHeader = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openCartDrawer, setOpenCartDrawer] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [SlideRotation, setSlideRotation] = useState<any>(null)

    const router = useRouter();
    const handleAdd = () => {
        setOpenDrawer(true);
    };

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    };
    const handleCartDrawer = () => {
        setOpenCartDrawer(true);
    };
    const handleCartCloseDrawer = () => {
        setOpenCartDrawer(false);
    };
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };
    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleSlideChange = (swiper: any) => {
        const realIndex = swiper.realIndex;
        const currentRotation = Data[realIndex]?.rotation;

        if (currentRotation) {
            setSlideRotation(currentRotation);
        }
    };

    const handelSearchRoute = () => {
        router.push('/search');
    }

    return (
        <div className={styles.header_div_main}>
            <div className={styles.header_bar_div}>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: SlideRotation,
                        disableOnInteraction: false
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {
                        Data?.map((item: DataType, index: number) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className={styles.header_bar} style={{ backgroundColor: `${item?.color}` }}>
                                        <p className={styles.message}>{item?.messgae}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className={styles.header_section_div}>
                <div className={styles.logo_div}>
                    <button className={styles.icon_button} onClick={handleAdd}>
                        <MenuRoundedIcon className={styles.icon} />
                    </button>
                    <img src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=320" alt="" className={styles.logo_image} />
                </div>
                <div className={styles.action_div}>
                    <button className={styles.icon_button} onClick={handelSearchRoute}>
                        <SearchOutlinedIcon className={styles.icon} />
                    </button>
                    <button className={styles.icon_button}>
                        <PermIdentityOutlinedIcon className={styles.icon} />
                    </button>
                    <button className={styles.icon_button} onClick={handleCartDrawer}>
                        <ShoppingBagOutlinedIcon className={styles.icon} />
                    </button>
                </div>
            </div>
            <HeaderDrawer Open={openDrawer} Close={handleCloseDrawer} />
            <LoginPopup Open={openPopup} Close={handleClosePopup} />
            <Cart_Drawer Open={openCartDrawer} Close={handleCartCloseDrawer} />
        </div>
    )
}
export default WebsiteHeader;