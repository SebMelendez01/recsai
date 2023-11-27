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

  // recsai_title
  const chairs = JSON.parse(data).filter(
    ({ recsai_title }: any) => recsai_title === "Co-Chair"
  );
  const experts = JSON.parse(data).filter(
    ({ recsai_title }: any) => recsai_title !== "Co-Chair"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="px-4 mx-auto lg:max-w-8xl md:px-8">
        <div className="flex w-full justify-evenly flex-wrap">
          {chairs.map((profile: any) => (
            <div key={profile.name} className="w-64 mb-4">
              <User
                name={profile.name}
                recsai_title={profile.recsai_title}
                affiliation={profile.affiliation}
                external={profile.website}
                linkedin={profile.linkedin}
                twitter={profile.twitter}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-evenly flex-wrap">
          {experts.map((profile: any) => (
            <div key={profile.name} className="w-64 mb-4">
              <User
                name={profile.name}
                recsai_title={profile.recsai_title}
                affiliation={profile.affiliation}
                external={profile.website}
                linkedin={profile.linkedin}
                twitter={profile.twitter}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
