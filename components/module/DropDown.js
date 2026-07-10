import Image from "next/image"
import styles from "./DropDown.module.css"
import Link from "next/link"
import { useEffect, useRef } from "react";
import { e2p } from "../../utils/numbers";
import { setCookie } from "../../utils/cookie";

function DropDown({ profile, onClose }) {
    const dropDownRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    const logoutHandler = () => {
        setCookie("accessToken", "")
        setCookie("refreshToken", "")
        window.reload();

    }
    return (

        <div className={styles.container} ref={dropDownRef}>
            <div className={styles.mobileProfile}>
                <div>
                    <Image src="/images/profileGray.png" width={16} height={16} alt='user profile' />
                </div>
                <span>{profile.mobile && e2p(profile.mobile)}</span>
            </div>
            <div className={styles.userProfile}>
                <Image src="/images/profileSolid.png" width={20} height={20} alt='user profile' />
                <Link href="/userProfile">اطلاعات حساب کاربری</Link>

            </div>
            <span className={styles.line}></span>
            <div className={styles.logout}>
                <Image src="/images/logout.png" width={20} height={20} alt='logout' />
                <Link href="/" onClick={logoutHandler}>خروج از حساب کاربری</Link>
            </div>
        </div>

    )
}

export default DropDown