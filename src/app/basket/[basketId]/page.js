"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";

import Image from 'next/image'
import { basketFormSchema } from "../../../../schema/basketform";
import { DatePicker } from "zaman";
import { useEffect, useState } from "react";
import api from "../../../../configs/api";
import { e2p, sp } from "../../../../utils/numbers";
import { calculateStayDuration } from "../../../../utils/calculation";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function Page() {
    const router = useRouter()
    const [basket, setBasket] = useState("");
    const [date, setDate] = useState(null);
    const result = calculateStayDuration(basket.startDate, basket.endDate);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(basketFormSchema),
    });
    useEffect(() => {
        if (date) {
            const selectedDate = new Date(date);
            const today = new Date();
            if (selectedDate > today) {
               toast.error("تاریخ تولد نمی تواند آینده باشد")
                setDate("");
            }
        }
    }, [date]);
    useEffect(() => {
        const fetcherBasket = async () => {
            try {
                const res = await api.get("/basket")

                setBasket(res.data);
                console.log(res.data);


            } catch (error) {
                console.log(error);
            }
        }
        fetcherBasket();

    }, [])
    
        if (!basket) return <ThreeDots wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            margin:"50px"
        }} />
    

    const onSubmit = async (data) => {
        const dataObject = new Date(date)
        const isoString = dataObject.toISOString();
        const formattedDate = isoString.split('T')[0];

        console.log({ birthDate: formattedDate, ...data });
        try {
            const res = await api.post("/order", { birthDate: formattedDate, ...data })
            toast.success("در حال انتقال به درگاه پرداخت ...")
            setTimeout(() => {
                router.push("/payment")
            }, 2000);
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.inputBox}>
                        <div className={styles.title}>
                            <Image src="/images/profileBlack.png" width={24} height={24} alt='user profile' />
                            <p>مشخصات مسافر</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div>
                                    <input className={`${errors.fullName?styles.error:""}`} placeholder="نام و نام خانوادگی" {...register("fullName")} />
                                </div>
                                <div>
                                    <input className={`${errors.nationalCode?styles.error:""}`}  placeholder="کد ملی" {...register("nationalCode")} />
                                </div>
                                <div>
                                    <DatePicker
                                        locale="fa"
                                        className="my-input-style"
                                        value={date}
                                        onChange={(e) => setDate(e.value)}
                                        maxDate={new Date()}
                                        accentColor="#28a745"
                                        inputAttributes={{
                                            placeholder: "تاریخ تولد",
                                            readOnly: true
                                        }}
                                    />
                                </div>
                                <div>
                                    <select
                                        id="gender"
                                        {...register('gender')}
                                        className={`${styles.select} ${errors.gender?styles.error:""}`}
                                    >
                                        <option value="">جنسیت</option>
                                        <option value="male">آقا</option>
                                        <option value="female">خانم</option>

                                    </select>

                                </div>



                                <button type="submit">ثبت و خرید نهایی</button>
                            </form>

                        </div>
                    </div>
                    <div className={styles.sidebar}>
                        <div className={styles.topSidebar}>
                            <p>{basket.title}</p>
                            <p>{`${e2p(result.days)} روز و ${e2p(result.nights)} شب`}</p>
                        </div>
                        <div className={styles.price}>
                            <p>قیمت نهایی</p>
                            <p><span>{sp(basket?.price)}</span>  تومان</p>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Page