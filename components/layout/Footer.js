import Image from "next/image"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
            <hr style={{ border: 'none', width: "1188px", margin: "auto", height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
            <div className={styles.footer}>
                <div className={styles.rightFooter}>
                    <div>
                        <p>تورینو</p>
                        <p>درباره ما</p>
                        <p>تماس با ما</p>
                        <p>چرا تورینو</p>
                        <p>بیمه مسافرتی</p>
                    </div>
                    <div>
                        <p>خدمات مشتریان</p>
                        <p>پشتیبانی آنلاین</p>
                        <p>راهنمای خرید</p>
                        <p>راهنمای استرداد</p>
                        <p>پرسش و پاسخ</p>
                    </div>

                </div>
                <div className={styles.leftFooter}>
                    <div className={styles.support}>
                        <Image src="/images/Torino-logo.png" width={146} height={44} alt="torino-logo" />
                        <span>تلفن پشتیبانی: 8574-021</span>
                    </div>
                    <div className={styles.logoBottomFooter}>
                        <Image src="/images/state-airline-f45c55b2 1.png" width={78} height={74} alt="state airline" />
                        <Image src="/images/passenger-rights-48368f81 1.png" width={71} height={74} alt="passenger logo" />
                        <Image src="/images/ecunion-35c3c933.png" width={68} height={74} alt="qr code" />
                        <Image src="/images/samandehi-6e2b448a.png" width={67} height={74} alt="samandehi logo" />
                        <Image src="/images/aira-682b7c43.png" width={68} height={74} alt="air logo" />
                    </div>
                </div>

            </div>
            <div className={styles.copyright}>
                <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
            </div>
        </>
    )
}

export default Footer