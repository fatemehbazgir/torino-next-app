import Image from "next/image"
import Link from "next/link"
import styles from "./not-found.module.css"

function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.backToHome}>
                <p>صفحه مورد نظر یافت نشد!</p>
                <Link href="/">بازگشت به صفحه اصلی</Link>
            </div>
            <div>
                <Image src="/images/ErrorTV.png" width={555} height={555} alt='not found' />
            </div>

        </div>
    )
}

export default NotFound