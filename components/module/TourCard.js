
import Image from "next/image";
import styles from "./TourCard.module.css"
import calculateDaysBetween from "../../utils/calculation";
import { e2p } from "../../utils/numbers";
import Link from "next/link";

function TourCard({ data }) {
    
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    const startOptions = { month: 'long' };


    console.log(data);
    console.log(data.id);
    return (

        <div className={styles.container}>
            <Image src={data.image} unoptimized width={274} height={159} alt="tour image" />
            <div className={styles.descriptionTour}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.subTitle}>{startDate.toLocaleDateString("fa", startOptions)} ماه . {e2p(calculateDaysBetween(startDate, endDate))} روز - {data.fleetVehicle === "bus"
                    ? "اتوبوس" : data.fleetVehicle === "ship"
                        ? "کشتی" : data.fleetVehicle === "train"
                            ? "قطار" : data.fleetVehicle === "airplane"
                                ? "هواپیما" : data.fleetVehicle === "SUV"
                                    ? "آفرودی" : null} - {data.options[1]}</p>
            </div>
            
            <div className={styles.reservation}>
                <Link href={`/tours/${data.id}`}>رزرو</Link>
                <p>{e2p(data.price.toLocaleString("fa-IR"))} <span>تومان</span></p>
            </div>
        </div>

    )
}

export default TourCard