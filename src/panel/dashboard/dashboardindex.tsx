import React from "react";
import styles from './dashboardIndex.module.scss';
import users from "./data";

const DashBoard_Main = () => {
    return (
        <div className={styles.dashboard_main}>
            <div className={styles.dashboard_container}>
                <p className={styles.heading}>ALL CUSTOMERS LIST</p>
                <div className={styles.table_div_main}>
                    <table className={styles.table_div} >
                        <thead className={styles.thead}>
                            <tr>
                                <th className={styles.th}>#</th>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>Role</th>
                                <th className={styles.th}>Date Joined</th>
                                <th className={styles.th}>Last Login</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {
                                users?.map((e: any, i: number) => {
                                    return (
                                        <tr>
                                            <th className={styles.th}>{e?.id}</th>
                                            <th className={styles.th}>{e?.name}</th>
                                            <th className={styles.th}>{e?.email}</th>
                                            <th className={styles.th}>{e?.role}</th>
                                            <th className={styles.th}>{e?.dateJoined}</th>
                                            <th className={styles.th}>{e?.lastLogin}</th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default DashBoard_Main;