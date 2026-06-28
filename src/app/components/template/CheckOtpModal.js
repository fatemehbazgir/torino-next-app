"use client"
import { formatTime } from '@/app/utils/timeConversion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import OtpInput from 'react18-input-otp'
import api from '../../../../configs/api'
import { checkOtp } from '../../../../services/auth'
import setCookie from '@/app/utils/cookie'
import styles from "./CheckOtpModal.module.css"
import { e2p } from '@/app/utils/numbers'

function CheckOtpModal({ code, setCode, mobile, setStep }) {

  const [timeLeft, setTimeLeft] = useState(120)

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000);

    return () => clearInterval(timerId);

  }, [timeLeft])

  const resendCodeHandler = async () => {
    setTimeLeft(120);
    try {
      const res = await api.post("/auth/send-otp", {
        mobile
      });
      setCode(res.data.code)
    } catch (error) {
      if (error) return error
    }
  }
  const loginHandler = async () => {
    if (code.length !== 6) return;

    const { response, error } = await checkOtp(mobile, code)

    if (response) {
      setCookie(response.data);
      setStep(0);

    }
    if (error) {
      console.log(error);
    }

  }
  return (
    <div style={{ direction: "ltr" }} className={styles.container}>
      <div className={styles.box}>
        <div className={styles.arrowLeft} onClick={() => setStep(1)}><Image src="/images/arrow-left.png" width={24} height={24} alt="arrow-left-image" /></div>
        <p className={styles.title}>.کد تایید را وارد کنید</p>
        <span className={styles.sendOtp}>کد تایید به شماره{e2p(mobile)} ارسال شد</span>
        <div className={styles.containerOtp} >
          <OtpInput className={styles.otpInput}
            value={code}
            onChange={setCode}
            numInputs={6}
            inputStyle={
              {
                width: "58px",
                height: "53px",
                borderRadius: "6px",
                border: "1px solid rgba(0, 0, 0, 0.25)",
                margin: "0 2px"
              }} />
        </div>
        <div className={styles.bottomButton}>
          {timeLeft > 0 ? (
            <>
              <p style={{ direction: "ltr", unicodeBidi: "plaintext" }}>
                <span>{e2p(formatTime(timeLeft))}</span> تا ارسال مجدد کد
              </p>

              <button onClick={loginHandler}>ورود به تورینو</button>
            </>
          ) : (
            <button onClick={resendCodeHandler}> ارسال مجدد کد</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CheckOtpModal