export const revalidate = 3600;
import Image from "next/image";
import styles from "./page.module.css"
import PurchaseReservationButton from "../../../../components/module/PurchaseReservationButton";
import { e2p, sp } from "../../../../utils/numbers";
import { calculateStayDuration } from "../../../../utils/calculation";
import { cookies } from 'next/headers';


async function Page({ params }) {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;

let detailTour=null;

    const { tourId } = await params;
    const translateCity = (cityName) => {
        return cityTranslationMap[cityName] || cityName;
    }
    const cityTranslationMap = {
        "Tehran": "تهران",
        "Sananndaj": "سنندج",
        "Isfahan": "اصفهان",
    }




    try {
        const res = await fetch(`http://localhost:6500/tour/${tourId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        detailTour = await res.json();
        console.log(detailTour, response);


    } catch (error) {
        console.log(error);
    }


    const startDate = new Date(detailTour.startDate);
    const endDate = new Date(detailTour.endDate);
    const result = calculateStayDuration(detailTour.startDate, detailTour.endDate);
    const startOptions = { day: 'numeric', month: 'long', year: 'numeric' };


    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.detailsTour}>
                    <div className={styles.imageTour}>
                        <Image src={detailTour.image} unoptimized width={397} height={265} alt="tour image" />
                    </div>
                    <div className={styles.leftDetailsTour}>
                        <div className={styles.firstDetails}>
                            <p>{detailTour.title}</p>
                            <p>{`${e2p(result.days)} روز و ${e2p(result.nights)} شب`}</p>
                        </div>
                        <div className={styles.secondDetails}>
                            <div>
                                <Image src="/images/user-tick.png" width={24} height={24} alt="user-tick" />
                                <p>تورلیدر از مبدا</p>
                            </div>
                            <div>
                                <Image src="/images/map.png" width={24} height={24} alt="map" />
                                <p>برنامه سفر</p>
                            </div>
                            <div>
                                <Image src="/images/medal-star.png" width={24} height={24} alt="modal-star" />
                                <p>تضمین کیفیت</p>
                            </div>
                        </div>
                        <div className={styles.reservation}>
                            <p><span>{sp(detailTour.price)}</span>  تومان</p>
                            <PurchaseReservationButton tourId={detailTour.id} token={token} />

                        </div>
                    </div>
                </div>
                <div className={styles.detailsBottom}>
                    <div className={styles.containerContent}>
                        <div className={styles.descriptionDetailsBottom}>
                            <Image src="/images/routing-2.png" width={20} height={20} alt="origin" />
                            <p className={styles.subContainerContent}>مبدا</p>
                        </div>
                        <p>{translateCity(detailTour.origin["name"])}</p>
                    </div>
                    <Image src="/images/Line 14.png" width={1} height={84} alt="line" />
                    <div className={styles.containerContent}>
                        <div className={styles.descriptionDetailsBottom}>
                            <Image src="/images/calendar (1).png" width={20} height={20} alt="calender" />
                            <p className={styles.subContainerContent}>تاریخ رفت</p>
                        </div>
                        <p>{startDate.toLocaleDateString("fa", startOptions)}</p>
                    </div>
                    <Image src="/images/Line 14.png" width={1} height={84} alt="line" />
                    <div className={styles.containerContent}>
                        <div className={styles.descriptionDetailsBottom}>
                            <Image src="/images/calendar-2.png" width={20} height={20} alt="calender" />
                            <p className={styles.subContainerContent}>تاریخ برگشت</p>
                        </div>
                        <p>{endDate.toLocaleDateString("fa", startOptions)}</p>
                    </div>
                    <Image src="/images/Line 14.png" width={1} height={84} alt="line" />
                    <div className={styles.containerContent}>
                        <div className={styles.descriptionDetailsBottom}>
                            <Image src="/images/bus.png" width={20} height={20} alt="bus icon" />
                            <p className={styles.subContainerContent}>حمل و نقل</p>
                        </div>
                        <p>{detailTour.fleetVehicle === "bus"
                            ? "اتوبوس" : detailTour.fleetVehicle === "ship"
                                ? "کشتی" : detailTour.fleetVehicle === "train"
                                    ? "قطار" : detailTour.fleetVehicle === "airplane"
                                        ? "هواپیما" : detailTour.fleetVehicle === "SUV"
                                            ? "آفرودی" : null}
                        </p>
                    </div>
                    <Image src="/images/Line 14.png" width={1} height={84} alt="line" />
                    <div className={styles.containerContent}>
                        <div className={styles.descriptionDetailsBottom}>
                            <Image src="/images/profile-2user.png" width={20} height={20} alt="capacity" />
                            <p className={styles.subContainerContent}>ظرفیت</p>
                        </div>
                        <p className={styles.subContainerContent}>حداکثر {detailTour.availableSeats} نفر</p>
                    </div>
                    <Image src="/images/Line 14.png" width={1} height={84} alt="line" />
                    <div className={styles.containerContent}>
                        <div className={styles.descriptionDetailsBottom}>
                            <Image src="/images/security.png" width={20} height={20} alt="security" />
                            <p>بیمه</p>
                        </div>
                        <p className={styles.subContainerContent}>بیمه{detailTour.capacity} هزار دیناری </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page