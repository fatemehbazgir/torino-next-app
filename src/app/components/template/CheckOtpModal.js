"use client"
import { formatTime } from '@/app/utils/timeConversion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import OtpInput from 'react18-input-otp'
import api from '../../../../configs/api'
import { checkOtp } from '../../../../services/auth'

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
      console.log(response);
    }
    if (error) {
      console.log(error);
    }

  }
  return (
    <div style={{ direction: "ltr" }}>
      <div>
        <div onClick={() => setStep(1)}><Image src="/images/arrow-left.png" width={24} height={24} alt="arrow-left-image" /></div>
        <p>کد تایید را وارد کنید.</p>
        <span>کد تایید به شماره{mobile} ارسال شد</span>
        <OtpInput value={code} onChange={setCode} numInputs={6} inputStyle={{ width: "40px", height: "40px" }} />
        <div>
          {timeLeft > 0 ? (
            <>
              <p>تا ارسال مجدد کد <span>{formatTime(timeLeft)}</span></p>
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