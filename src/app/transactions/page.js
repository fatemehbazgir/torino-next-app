import React from 'react'
import Sidebar from '../../../components/module/Sidebar'
import { cookies } from 'next/headers';
import { e2p, sp } from '../../../utils/numbers';
import { format } from 'date-fns-jalali';
import styles from "./page.module.css"

async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  let myTransaction = null;



  try {
    const res = await fetch("http://localhost:6500/user/transactions",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store'
      }
    )
    const data = await res.json();


    myTransaction = data;
  } catch (error) {
    console.log(error);
  }


  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>تاریخ و ساعت</th>
              <th>مبلغ(تومان)</th>
              <th>نوع تراکنش</th>
              <th>شماره سفارش</th>
            </tr>
          </thead>
          <tbody>
            {
              myTransaction.map((item) => (
                <tr key={item.id}>
                  <td>{e2p(format(new Date(item?.createdAt), 'HH:mm - yyyy/MM/dd'))}</td>
                  <td>{sp(item?.amount)}</td>
                  <td>{item?.type === "Purchase" ? "ثبت نام در تور گردشگری" : "-"}</td>
                  <td>سفارش {e2p(12054902)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default Page