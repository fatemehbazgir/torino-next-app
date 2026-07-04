"use client"

import Image from "next/image"
import styles from "./WhyTorino.module.css"


function WhyTorino() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <div className={styles.whyTorino}>
                        <p className={styles.question}>؟</p>
                        <p className={styles.title}>چرا <span>تورینو</span> ؟</p>
                    </div>
                    <div className={styles.description}>
                        <p>تور طبیعت گردی و تاریخی </p>
                        <p>اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.</p>
                    </div>
                </div>
                اسلایدر
            </div>
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
            <div className={styles.guide}>
                <div className={styles.subGuid}>
                    <Image src="/images/Group 16.png" width={88} height={72} alt="price percent" />
                    <div>
                        <p>بصرفه ترین قیمت</p>
                        <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
                    </div>
                </div>
                <div className={styles.subGuid}>
                    <Image src="/images/Group 17.png" width={82} height={78} alt="support" />
                    <div>
                        <p>پشتیبانی</p>
                        <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
                    </div>
                </div>
                <div className={styles.subGuid}>
                    <Image src="/images/Group 18.png" width={82} height={74} alt="liked user" />
                    <div>
                        <p>رضایت کاربران</p>
                        <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhyTorino