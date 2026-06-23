import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href="/"><Image src="/images/Torino-logo.png" width={146} height={44} alt='Torino Logo' /></Link>

                <ul>
                    <li><Link href="/">صفحه اصلی</Link></li>
                    <li><Link href="/">خدمات گردشگری</Link></li>
                    <li><Link href="/">درباره ما</Link></li>
                    <li><Link href="/">تماس با ما</Link></li>
                </ul>

            </div>

            <div className={styles.headerButtons}>
                <Image src="/images/profile.png" width={24} height={24} alt='user profile' />
                <button>
                    ورود | 
                </button>
                <button> ثبت نام</button>

            </div>
        </div>
    )
}

export default Header