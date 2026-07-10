import { Toaster } from 'react-hot-toast';
import Footer from './Footer'
import Header from './Header'
import { cookies } from 'next/headers';

async function Layout({ children }) {


    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;




    return (
        <>
            <Header token={token}/>
            <Toaster/>
            {children}
            <Footer />
        </>

    )
}

export default Layout