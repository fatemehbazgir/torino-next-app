"use client"

import Image from "next/image"
import { getTourStatus } from "../../utils/tourStatus";
import { formatDateCustom } from "../../utils/formatDateCustom";
import { e2p, sp } from "../../utils/numbers";
import styles from "./MyTourCard.module.css"


function MyTourCard({ tourItem }) {


  const translateCity = (cityName) => {
    return cityTranslationMap[cityName] || cityName;
  }
  const cityTranslationMap = {
    "Tehran": "تهران",
    "Sananndaj": "سنندج",
    "Isfahan": "اصفهان",
  }
  const translateCityDestination = (cityName) => {
    return cityDestinationMap[cityName] || cityName;
  }
  const cityDestinationMap = {
    "Sananndaj": "سنندج",
    "Madrid": "مادرید",
    "Sulaymaniyah": "سلیمانیه",
    "Hewler": "هولر",
    "Mazandaran": "مازندران",
    "Gilan": "گیلان",
    "Italy": "ایتالیا"
  }


  let imageSource = null;

  if (tourItem.fleetVehicle === "airplane") {
    imageSource = "/images/airplane.png";
  } else if (tourItem.fleetVehicle === "ship") {
    imageSource = "/images/ship.png";
  } else if (
    tourItem.fleetVehicle === "bus" ||
    tourItem.fleetVehicle === "train" ||
    tourItem.fleetVehicle === "SUV"
  ) {

    imageSource = "/images/bus(1).png";
  }

  return (
    <div className={styles.container}>
      <div className={styles.firstLine}>
        <div className={styles.group}>
          <Image src="/images/sun-fog.png" width={24} height={24} alt="sun-fog" />
          <p>{tourItem.title}</p>
        </div>
        <div className={styles.group}>
          <Image src={imageSource} width={24} height={24} alt="icon" />
          <p>سفر با {tourItem.fleetVehicle === "bus"
            ? "اتوبوس" : tourItem.fleetVehicle === "ship"
              ? "کشتی" : tourItem.fleetVehicle === "train"
                ? "قطار" : tourItem.fleetVehicle === "airplane"
                  ? "هواپیما" : tourItem.fleetVehicle === "SUV"
                    ? "آفرودی" : null}</p>
        </div>
        <p className={styles.status}>{getTourStatus(tourItem.startDate, tourItem.endDate)}</p>
      </div>

      <div className={styles.secondLine}>
        <div>
          <p>{translateCity(tourItem.origin["name"])} به {translateCityDestination(tourItem.destination["name"])}</p>
          <span className={styles.dot}>.</span>
          <p>{formatDateCustom(tourItem.startDate)}</p>
        </div>
        <div className={styles.group}>
          <p>تاریخ برگشت</p>
          <span className={styles.dot}>.</span>
          <p>{formatDateCustom(tourItem.endDate)}</p>
        </div>
      </div>

      <div className={styles.border}></div>
      <div className={styles.thirdLine}>
        <div className={styles.groupOne}>
          <span>شماره تور</span>
          <span>{e2p("102095404")}</span>
        </div>
        <div className={styles.payment}>
          <span>مبلغ پرداخت شده</span>
          <p>{sp(tourItem?.price)}<span className={styles.unit}>تومان</span></p>
        </div>
      </div>
    </div>
  )
}

export default MyTourCard