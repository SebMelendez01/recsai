"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Event, EventProps } from "@/components/event";
import Image from "next/image";
import dalle_event from "@/public/images/dalle-event.png";
import useSWR from "swr";

import { fetcher } from "@/utils/api";

function sortEvents(events: EventProps[]): EventProps[] {
  return events.sort((a, b) => {
    const a_date = new Date(a.start_date);
    const b_date = new Date(b.start_date);
    return a_date.getTime() - b_date.getTime();
  });
}

export default function events() {
  const { data, error } = useSWR("/api/staticdata?id=events", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const events = JSON.parse(data);

  let upcomingEvents: EventProps[] = events.filter((event: EventProps) => {
    const current_date = new Date();

    if (event.end_date) return new Date(event.end_date) > current_date;
    return new Date(event.start_date) > current_date;
  });

  let pastEvents: EventProps[] = events.filter((event: EventProps) => {
    const current_date = new Date();

    if (event.end_date) return new Date(event.end_date) <= current_date;
    return new Date(event.start_date) <= current_date;
  });

  upcomingEvents = sortEvents(upcomingEvents);

  pastEvents = sortEvents(pastEvents);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="text-black h-full xl:mt-0 sm:mt-10 px-4 mx-auto lg:max-w-8xl md:px-8 ">
        {upcomingEvents.length !== 0 && (
          <div>
            <h1 className="text-3xl	sm:text-5xl font-bold text-black mb-5">
              Upcoming Events
            </h1>
            {upcomingEvents.map((event: EventProps) => (
              <div key={event.name}>
                <Event
                  name={event.name}
                  type={event.type}
                  location={event.location}
                  start_date={event.start_date}
                  end_date={event.end_date}
                  main_link={event.main_link}
                  links={event.links}
                />
              </div>
            ))}
          </div>
        )}
        {pastEvents.length !== 0 && (
          <div>
            <h1 className="text-3xl	sm:text-5xl font-bold text-black mb-5 mt-10">
              Past Events
            </h1>
            {pastEvents.map((event: EventProps) => (
              <div key={event.name}>
                <Event
                  name={event.name}
                  type={event.type}
                  location={event.location}
                  start_date={event.start_date}
                  end_date={event.end_date}
                  main_link={event.main_link}
                  links={event.links}
                />
              </div>
            ))}
          </div>
        )}
        {pastEvents.length === 0 && upcomingEvents.length === 0 && (
          <div className="w-full flex items-center flex-col lg:flex-row justify-center">
            <div className="xl:pr-10 xl:pb-0 pb-10 ">
              <h2 className="font-bold sm:text-7xl text-5xl ">
                Stay tuned for updates on RECSAI events...
              </h2>
            </div>
            <div className="xl:w-3/6 w-5/6">
              <Image className="rounded-full" src={dalle_event} alt="" />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
