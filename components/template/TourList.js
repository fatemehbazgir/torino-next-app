"use client"
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../services/tour';
import TourCard from '../module/TourCard';
import styles from "./TourList.module.css"
import { ThreeDots } from 'react-loader-spinner';


function TourList() {


    const { data, isLoading, isError } = useQuery({
        queryKey: ['tours'],
        queryFn: fetcher,
    });


    if (isLoading) return <ThreeDots wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        margin:"50px"
    }} />

    return (
        <div className={styles.tours}>
            <p className={styles.title}>همه تور ها</p>
            <div className={styles.container}>
                {
                    data.map((tour) => <TourCard data={tour} key={tour.id} />)

                }
            </div>

        </div>
    )
}

export default TourList