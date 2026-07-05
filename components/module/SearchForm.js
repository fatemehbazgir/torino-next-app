"use client"

import Image from "next/image"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { searchFormSchema } from "../../schema/SearchForm";
import { DatePicker } from "zaman";
import styles from "./SearchForm.module.css"
import { useState } from "react";




function SearchForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(searchFormSchema),
    });
    const[date,setDate]=useState("");

    const onSubmit = (data) => {
        console.log({date,data});
    }
    return (
        <div className={styles.container}>
            <p><span className={styles.title}>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.content}>
                    <div>
                        <Image src="/images/location.png" width={20} height={20} alt='location' />
                        <input placeholder="مبدا" {...register("ori")} />
                    </div>
                    <div>{errors.ori && <span>لطفا نام شهر معتبر را وارد کنید</span>}</div>
                </div>
                <div className={styles.content}>
                    <div>
                        <Image src="/images/global-search.png" width={20} height={20} alt="global-search" />
                        <input placeholder="مقصد" {...register("des")} />
                    </div>
                    <div>
                        {errors.des && <span>لطفا نام شهر معتبر را وارد کنید</span>}
                    </div>
                </div>
                <div className={styles.date}>
                    <Image src="/images/calendar.png" width={20} height={20} alt="calendar" />
                    <span>تاریخ</span>
                    <DatePicker  className="my-input-style" selected={date} range onChange={(date) => setDate(date)} accentColor="#28a745" />

                    {/* <div>
                        {errors.date && <span>لطفا تاریخ معتبر را وارد کنید</span>}
                    </div> */}
                </div>

                <button className={styles.search} type="submit">جستجو</button>
            </form>

        </div>
    )
}

export default SearchForm