"use client"

import Image from "next/image"
import { e2p } from "../../utils/numbers"
import Link from "next/link"
import styles from "./ContactBanner.module.css"

function ContactBanner() {
    return (
        <div className={styles.container}>
            <Image src="/images/ContactBanner.png" width={1188} height={251} alt="contact banner" />
            <div className={styles.callInformation}>
                <div>
                    <p>{e2p("021-1840")}</p>
                    <Image src="/images/call.png" width={24} height={24} alt="call image" />
                </div>
                <Link href="/">اطلاعات بیشتر</Link>
            </div>
        </div>
    )
}

export default ContactBanner