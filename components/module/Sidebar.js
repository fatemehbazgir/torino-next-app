"use client"
import Image from "next/image"
import styles from "./Sidebar.module.css"
import { useState } from "react"
import Link from "next/link"

function Sidebar() {
    const [activeItem, setActiveItem] = useState("پروفایل");
    return (
        <div className={styles.container}>
            <div className={`${styles.items} ${styles.firstItem} ${activeItem === 'پروفایل' ? styles.activeItem : ""} `} onClick={() => setActiveItem("پروفایل")}>
                <Image src="/images/profile.png" width={20} height={20} alt="user profile" />
                <p>پروفایل</p>
            </div>
            <span className={styles.line}></span>
            <div className={`${styles.items} ${activeItem === 'تور های من' ? styles.activeItem : ""} `} onClick={() => setActiveItem("تور های من")}>
                <Image src="/images/sun-fog.png" width={20} height={20} alt="my-tour" />
                <Link href="/myTours">تور های من</Link>
            </div>
            <span className={styles.line}></span>
            <div className={`${styles.items} ${activeItem === 'تراکنش ها' ? styles.activeItem : ""} ${styles.lastItem} `} onClick={() => setActiveItem("تراکنش ها")}>

                <Image src="/images/convert-card.png" width={20} height={20} alt="convert-card" />
                <Link href="/transactions">تراکنش ها</Link>
            </div>
        </div>

    )
}

export default Sidebar