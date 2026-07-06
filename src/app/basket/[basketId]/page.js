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

function Page() {
    const [basket, setBasket] = useState("");

    const result = calculateStayDuration(basket.startDate, basket.endDate);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(basketFormSchema),
    });
    // const onSubmit = () => { }

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


    return (
        <>
            <div>
                <div>
                    <div>
                        <Image src="/images/profileBlack.png" width={24} height={24} alt='user profile' />
                        <p>مشخصات مسافر</p>
                    </div>
                    <div>
                        <form>

                            <div>
                                <input placeholder="نام و نام خانوادگی" {...register("fullName")} />
                                {errors.fullName && <span>لطفا نام و نام خانوادگی را کامل وارد کنید</span>}
                            </div>
                            <div>
                                <input placeholder="کد ملی" {...register("nationalCode")} />
                                {errors.nationalCode && <span>لطفا کد ملی صحیح را وارد کنید</span>}
                            </div>
                            <div>
                                <DatePicker
                                    // maxDate={new DateObject().subtract(6570, "day")}
                                    // onChange={(e) => onChange(e.toDate().toISOString())}
                                    // calendar={persian}
                                    // locale={persian_fa}
                                    className="green"
                                    calendarPosition="bottom-left"
                                    render={
                                        <input style={{ height: "40px" }} placeholder="تاریخ تولد" />
                                    }
                                />
                            </div>
                            <div>
                                <select
                                    id="gender"
                                    {...register('gender')}
                                    className={`p-2 border rounded ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                                >
                                    <option value="">جنسیت</option>
                                    <option value="male">آقا</option>
                                    <option value="female">خانم</option>

                                </select>

                                {errors.gender && <span>لطفا جنسیت را مشخص کنید</span>}
                            </div>



                            {/* <button className={styles.search} type="submit">ثبت</button> */}
                        </form>

                    </div>
                </div>
                <div>
                    <div>
                        <span>{basket.title}</span>
                        <span>{`${e2p(result.days)} روز و ${e2p(result.nights)} شب`}</span>
                    </div>
                    <div>
                        <span>قیمت نهایی</span>
                        <p><span>{sp(basket?.price)}</span>  تومان</p>
                    </div>
                    <button>ثبت و خرید نهایی</button>
                </div>
            </div>
        </>
    )
}

export default Page