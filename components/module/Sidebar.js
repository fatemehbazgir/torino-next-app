"use client"
import Image from "next/image"
import styles from "./Sidebar.module.css"
import { useState } from "react"

function Sidebar() {
    const [activeItem, setActiveItem] = useState("پروفایل");
    return (
        <div className={styles.container}>
            <div className={`${styles.items}${styles.firstItem} ${activeItem === 'پروفایل' ? styles.activeItem : ''} `} onClick={() => setActiveItem("پروفایل")}>
                <Image src="/images/profile.png" width={20} height={20} alt="user profile" />
                <p>پروفایل</p>
            </div>
            <span className={styles.line}></span>
            <div className={`${styles.items}${activeItem === 'تور های من' ? styles.activeItem : ''} `} onClick={() => setActiveItem("تور های من")}>
                <Image src="/images/sun-fog.png" width={20} height={20} alt="my-tour" />
                <p>تور های من</p>
            </div>
            <span className={styles.line}></span>
            <div className={`${styles.items}${activeItem === 'تراکنش ها' ? styles.activeItem : ''} ${styles.lastItem} `} onClick={() => setActiveItem("تراکنش ها")}>

                <Image src="/images/convert-card.png" width={20} height={20} alt="convert-card" />
                <p>تراکنش ها</p>
            </div>
        </div>

    )
}

export default Sidebar