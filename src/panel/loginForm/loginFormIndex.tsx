'use client';
import React, { useState } from "react";
import styles from './loginFormIndex.module.scss';
import { useRouter } from "next/navigation";

const Login_Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    const handleSumit = (e: any) => {
        e.preventDefault()
        const obj = {
            email,
            password
        }
        console.log("check", obj)
        setEmail("")
        setPassword("")
        router.push("/panel/dashboard")
    }
    return (
        <div className={styles.Login_main_div}>
            <div className={styles.Login_container_div}>
                <h1 className={styles.heading}>Login</h1>
                <form className={styles.form_div} onSubmit={(e: any) => handleSumit(e)}>
                    <input type="email" placeholder="Email" className={styles.input} value={email} onChange={(e: any) => setEmail(e?.target.value)} required />
                    <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e: any) => setPassword(e?.target.value)} required />
                    <button className={styles.login_btn} type="submit" >Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login_Form