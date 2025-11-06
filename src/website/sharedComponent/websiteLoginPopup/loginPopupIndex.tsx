'use client'
import React, { useState } from "react";
import styles from './loginPopupIndex.module.scss';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

interface HeaderPopupProps {
    Open: boolean;
    Close: () => void;
}

const LoginPopup = ({ Open, Close }: HeaderPopupProps) => {
const [Number , setNumber] = useState<string>("")

const HandleSubmit = (e:any)=>{
    e?.preventDefault()
    if(!Number){
        alert("Please enter correct number")
        return
    }
    alert(Number)
}

    return (
        <div className={styles.login_div_main}>
            <Modal
                open={Open}
                // onClose={Close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={styles.modal_div}
            >
                <div className={styles.popup_main_div}>
                    <div className={styles.heading_div}>
                        <p className={styles.welcome_heading}>Welcome!</p>
                        <div className={styles.icon_box} onClick={Close}><CloseIcon className={styles.icon} /></div>
                    </div>
                    <form className={styles.form} onSubmit={HandleSubmit}>
                        <input type="number" placeholder="Phone Number (03XXXXXXXXX)"
                            maxLength={11}
                            className={`${styles.input} ${styles.noSpin}`}
                            onChange={(e) => setNumber(e?.target.value)}
                        />
                        <button className={styles.login_btn} type="submit" >LOGIN</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
export default LoginPopup