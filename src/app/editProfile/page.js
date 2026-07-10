import React from 'react'
import Sidebar from '../../../components/module/Sidebar'
import { getProfile } from '../../../services/profile';
import { cookies } from 'next/headers';
import { e2p } from '../../../utils/numbers';
import UserAccountInformation from '../../../components/module/UserAccountInformation';
import InputsUserInformation from '../../../components/module/InputsUserInformation';
import BankAccountInformation from '../../../components/module/BankAccountInformation';
import styles from "./page.module.css"



async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  const profile = await getProfile(token);



  return (
    <div className={styles.container}>
      <Sidebar />
      <div>
        <div className={styles.userAccount}>
          <p className={styles.title}>اطلاعات حساب کاربری</p>
          <div className={styles.userAccountData}>
            <div className={styles.boxMobile}>
              <p>شماره موبایل</p>
              <p>{e2p(profile?.mobile)}</p>
            </div>
            <div>
              <UserAccountInformation />
            </div>
          </div>
        </div>
        <div className={styles.inputsUserInformation}>
          <p className={styles.title}>اطلاعات شخصی</p>
          <InputsUserInformation />
        </div>
        <div className={styles.bankAccountInformation}>
          <p className={styles.title}>اطلاعات حساب بانکی</p>
          <BankAccountInformation />
        </div>
      </div>
    </div>
  )
}

export default page