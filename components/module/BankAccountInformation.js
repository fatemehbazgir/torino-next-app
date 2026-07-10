"use client"

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { BankAccountSchema } from '../../schema/BankAccountForm';
import api from '../../configs/api';
import styles from "./BankAccountInformation.module.css"

function BankAccountInformation() {
    const router = useRouter();
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(BankAccountSchema),
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get("/user/profile");
              

                reset({
                    shaba_code: res.data?.payment.shaba_code || "",
                    debitCard_code: res.data?.payment.debitCard_code || "",
                    accountIdentifier: res.data?.payment.accountIdentifier || "",
                })
            } catch (error) {
                console.log(error);

            }
        }
        fetchProfile()
    }, [reset]);

    const onSubmit = async (data) => {

        const payment = { ...data };

        try {
            const res = await api.put("/user/profile", {payment});
            router.push("/userProfile")
        
        } catch (error) {
            router.push("/userProfile")
        }
    }
    const backHandler = () => {
        router.push("/userProfile")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

            <div>
                <input placeholder="شماره شبا" {...register("shaba_code")} />
                {errors.shaba_code && <span>شماره شبا وارد شده معتبر نمی باشد!</span>}
            </div>
            <div>
                <input placeholder="شماره کارت" {...register("debitCard_code")} />
                {errors.debitCard_code && <span>لطفا شماره کارت معتبر وارد کنید!</span>}
            </div>

            <div>
                <input placeholder="شماره حساب" {...register("accountIdentifier")} />
                {errors.accountIdentifier && <span>لطفا شماره حساب معتبر وارد کنید!</span>}
            </div>



            <button type="submit" className={styles.submit}>تایید</button>
            <button type="button" onClick={backHandler} className={styles.cancel}>انصراف</button>
        </form>


    )
}

export default BankAccountInformation