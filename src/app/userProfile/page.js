
import Sidebar from "../../../components/module/Sidebar"

import styles from "./page.module.css"
import { e2p } from "../../../utils/numbers";
import { getProfile } from "../../../services/profile";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

async function UserProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;


  const profile = await getProfile(token)



  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.detailProfile}>
        <div className={styles.firstSection}>
          <p className={styles.title}>اطلاعات حساب کاربری</p>
          <div className={styles.detailsFirstSection}>
            <div>
              <p>شماره موبایل</p>
              <p>{e2p(profile?.mobile)}</p>
            </div>
            <div>
              <p>ایمیل</p>
              <p>{profile?.email || "-"}</p>
            </div>
            <div className={styles.link}>
              <Link href="/editProfile">
                <Image src="/images/edit-2.png" width={16} height={16} alt="edit button" />
                افزودن
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.firstSecondSection}>
            <p>اطلاعات شخصی</p>
            <Link href="/editProfile">
              <Image src="/images/edit-2.png" width={16} height={16} alt="edit button" />
              ویرایش اطلاعات
            </Link>
          </div>
          <div className={styles.sectionSecondSection}>
            <div className={styles.firstSectionSecondSection}>
              <div>
                <p>نام و نام خانوادگی</p>
                <p>{profile?.fullName || "-"}</p>
              </div>
              <div>
                <p>کد ملی</p>
                <p>{profile?.nationalCode || "-"}</p>
              </div>
            </div>
            <div className={styles.secondSectionSecondSection}>
              <div>
                <p>جنسیت</p>
                <p>{profile?.gender || "-"}</p>
              </div>
              <div>
                <p>تاریخ تولد</p>
                <p>{profile?.birthDate || "-"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.firstThirdSection}>
            <p>اطلاعات حساب بانکی</p>
            <Link href="/editProfile">
              <Image src="/images/edit-2.png" width={16} height={16} alt="edit button" />
              ویرایش اطلاعات
            </Link>
          </div>
          <div className={styles.secondThirdSection}>
            <div className={styles.firstSecondThirdSection}>
              <div>
                <p>شماره شبا</p>
                <p>{profile?.IBAN || "-"}</p>
              </div>
              <div>
                <p>شماره کارت</p>
                <p>{profile?.cardNumber || "-"}</p>
              </div>
            </div>
            <div>
              <p>شماره حساب</p>
              <p>{profile.accountNumber || "-"}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserProfile