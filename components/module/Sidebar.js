"use client"
import Image from "next/image"
import styles from "./Sidebar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
function Sidebar() {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    const getIcon = (activePath, activeIcon, inactiveIcon) => {
        return isActive(activePath) ? activeIcon : inactiveIcon;
    };


    return (
        <div className={styles.container}>
            <div className={`${styles.items} ${styles.firstItem} ${isActive("/userProfile") ? styles.activeItem : ""} `}>
                <Image src={getIcon(`/userProfile`, `/images/profile.png`, `/images/profileBlack.png`)} width={20} height={20} alt="user profile" />
                <Link href="/userProfile">پروفایل</Link>
            </div>
            <span className={styles.line}></span>
            <div className={`${styles.items} ${isActive("/myTours") ? styles.activeItem : ""} `}>
                <Image src={getIcon(`/transactions`, `/images/sun-fog.png`, `/images/sun-fog (1).png`)} width={20} height={20} alt="myTour" />
                <Link href="/myTours">تور های من</Link>
            </div>
            <span className={styles.line}></span>
            <div className={`${styles.items} ${isActive("/transactions") ? styles.activeItem : ""} ${styles.lastItem} `}>

                <Image src={getIcon(`/transactions`, `/images/convert-card (1).png`, `/images/convert-card.png`)} width={20} height={20} alt="convert-card" />
                <Link href="/transactions">تراکنش ها</Link>
            </div>
        </div>

    )
}

export default Sidebar