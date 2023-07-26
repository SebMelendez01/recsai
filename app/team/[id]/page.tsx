// import {useRouter} from 'next/router'
"use client"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import SocialMedia from '@/components/social-media';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProfilePage() {
    const pathname = usePathname();
    const slug = pathname ? pathname.split('/')[2] : "";

    const { data, error } = useSWR('/api/staticdata', fetcher);
    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    const profile = JSON.parse(data)[slug];

    return (
        <div>
            <Navbar/>
            <div className='text-black w-full px-4 mx-auto lg:max-w-8xl md:px-8 md:mb-20 mb-10 md:flex md:items-center'>
                <div className='md:w-8/12'>
                    <h2 className='font-bold text-4xl'>{profile.name}</h2>
                    <hr className="w-48 h-px bg-black border-0 rounded mt-2 mb-2"/>
                    <p className='font-light'>
                        {profile.description}
                    </p>
                    <div className='mt-4 flex justify-center'>
                        <SocialMedia twitter={profile.twitter} linkedin={profile.linkedin} external={profile.website} size={6}/>
                    </div>
                    
                </div>
                <div className='flex justify-center mt-10'>
                    <Image className="md:p-20" width={500} height={500} src={`/profiles/${slug}.png`} alt=''/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}