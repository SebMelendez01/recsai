"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import User from "@/components/user";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Team() {
    const { data, error } = useSWR('/api/staticdata', fetcher);
    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    const profiles = JSON.parse(data);
    console.log(profiles.names);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="px-4 mx-auto lg:max-w-8xl md:px-8">
                <div className="flex w-screen justify-evenly flex-wrap">
                    {profiles.names.map((profile :string) => (
                        <div key={profile} className="w-64 mb-4">
                            <User name={profiles[profile].name} title={profiles[profile].title} external={profiles[profile].website} linkedin={profiles[profile].linkedin} twitter={profiles[profile].twitter} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
  }