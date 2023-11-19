"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import User from "@/components/user";
import { fetcher } from "@/utils/api";
import useSWR from "swr";

export default function Team() {
  const { data, error } = useSWR("/api/staticdata?id=profiles", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const profiles = JSON.parse(data);
  const names = Object.keys(profiles);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="px-4 mx-auto lg:max-w-8xl md:px-8">
        <div className="flex w-full justify-evenly flex-wrap">
          {names.map((profile: string) => (
            <div key={profile} className="w-64 mb-4">
              <User
                name={profiles[profile].name}
                recsai_title={profiles[profile].recsai_title}
                affiliation={profiles[profile].affiliation}
                external={profiles[profile].website}
                linkedin={profiles[profile].linkedin}
                twitter={profiles[profile].twitter}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
