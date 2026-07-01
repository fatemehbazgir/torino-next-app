"use client"
import Image from "next/image"
import styles from "./error.module.css"

function Error() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>اتصال با سرور برقرار نیست!</p>
                <p>لطفا بعدا دوباره امتحان کنید.</p>
            </div>
            <div>
                <Image src="/images/ErrorLampRobot.png" width={555} height={555} alt='error' />
            </div>

        </div>
    )
}

export default Error