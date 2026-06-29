"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import styles from "./Header.module.css"
import SendOtpModal from '../template/SendOtpModal'
import CheckOtpModal from '../template/CheckOtpModal'
import api from '../../../../configs/api';

function Header() {
    const [step, setStep] = useState(0);
    const [code, setCode] = useState("");
    const [mobile, setMobile] = useState("");

    useEffect(() => {
        api.get("/user/profile").then(res => console.log(res));
    }, [])

    return (
        <>
            <div className={styles.header}>
                <div className={styles.navbar}>
                    <Link href="/"><Image priority src="/images/Torino-logo.png" width={146} height={44} alt='Torino Logo' /></Link>

                    <ul>
                        <li><Link href="/">صفحه اصلی</Link></li>
                        <li><Link href="/">خدمات گردشگری</Link></li>
                        <li><Link href="/">درباره ما</Link></li>
                        <li><Link href="/">تماس با ما</Link></li>
                    </ul>

                </div>

                <div className={styles.headerButtons}>
                    <Image src="/images/profile.png" width={24} height={24} alt='user profile' />
                    <button onClick={() => setStep(1)}>
                        ورود |
                    </button>
                    <button> ثبت نام</button>

                </div>
            </div>
            {step === 1 && <SendOtpModal setStep={setStep} setMobile={setMobile} setCode={setCode} />}
            {step === 2 && <CheckOtpModal setStep={setStep} code={code} setCode={setCode} mobile={mobile} />}
        </>
    )
}

export default Header