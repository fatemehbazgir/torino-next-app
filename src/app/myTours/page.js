
import { cookies } from 'next/headers';
import Sidebar from '../../../components/module/Sidebar'
import MyTourCard from '../../../components/module/MyTourCard';

async function Page() {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;
    let myTour = null;
    try {
        const res = await fetch("http://localhost:6500/user/tours",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store'
            }
        )
        const data = await res.json();
        myTour = data;
    } catch (error) {
        console.log(error);
    }


    return (
        <div>
            <Sidebar />
            <div>
                <MyTourCard  data={myTour}/>
            </div>
        </div>
    )
}

export default Page