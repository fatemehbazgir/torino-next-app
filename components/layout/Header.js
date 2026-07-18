"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import styles from "./Header.module.css"
import SendOtpModal from '../template/SendOtpModal'
import CheckOtpModal from '../template/CheckOtpModal'
import DropDown from '../module/DropDown';
import api from '../../configs/api';
import { e2p } from '../../utils/numbers';



function Header({ token }) {


    const [step, setStep] = useState(0);
    const [code, setCode] = useState("");
    const [mobile, setMobile] = useState("");
    const [profile, setProfile] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const closeDropDown = () => setIsOpen(false);

    useEffect(() => {

        api.get("/user/profile")
            .then((res) => setProfile(res.data))
            .catch((error) => console.log(error))
    }, []);



    return (
        <>
            <div className={styles.header}>
                <button className={styles.menu}><Image priority src="/images/menu.png" width={20} height={16} alt='menu' /></button>
                <div className={styles.navbar}>
                    <Link href="/"><Image priority src="/images/Torino-logo.png" width={146} height={44} alt='Torino Logo' /></Link>

                    <ul>
                        <li><Link href="/">صفحه اصلی</Link></li>
                        <li><Link href="/">خدمات گردشگری</Link></li>
                        <li><Link href="/">درباره ما</Link></li>
                        <li><Link href="/">تماس با ما</Link></li>
                    </ul>

                </div>
                {
                    token ? (
                        <>
                            <div className={styles.profile}>
                                <Image src="/images/profile.png" width={24} height={24} alt='user profile' />
                                <span>{profile.mobile && e2p(profile.mobile)}</span>
                                <Image onClick={() => setIsOpen(true)} src="/images/Vector.png" width={16} height={8} alt="arrow-down" />
                            </div>

                        </>
                    ) : (
                        <> <div className={styles.headerButtons}>
                            <Image src="/images/profile.png" width={24} height={24} alt='user profile' />
                            <button onClick={() => setStep(1)}>
                                ورود |
                            </button>
                            <button> ثبت نام</button>
                        </div>
                            <button className={styles.loginButton}><Image src="/images/signInButtom.png" width={40} height={40} alt='login button' /></button>
                        </>
                    )
                }

            </div>
            {isOpen && <DropDown profile={profile} onClose={closeDropDown} />}
            {step === 1 && <SendOtpModal setStep={setStep} setMobile={setMobile} setCode={setCode} />}
            {step === 2 && <CheckOtpModal setStep={setStep} code={code} setCode={setCode} mobile={mobile} />}
        </>
    )
}

export default Header