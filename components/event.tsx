import Image from "next/image";
import Link from "next/link";

interface PannelProps {
  name: string;
  link: string;
}

export interface EventProps {
  name: string;
  type: "Workshop" | "Event";
  location: string;
  start_date: string;
  end_date?: string;
  link?: string;
  pannels?: PannelProps[];
}

export function Event({
  name,
  type,
  location,
  start_date,
  end_date,
  link,
  pannels,
}: EventProps) {
  const slug = start_date.replace(",", "").split(" ").join("-");
  console.log(slug);
  console.log(pannels);
  return (
    // Set a max-height for the event card and ensure content is aligned properly
    <div className="mb-5 w-full sm:h-60 bg-white border border-black shadow flex flex-col sm:flex-row overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          className="border-b sm:h-60 sm:w-60 w-full h-full sm:border-b-0 sm:border-r border-black"
          width={200}
          height={200}
          src={`/events/${slug}.png`}
          alt={name}
        />
      </div>
      <div className="sm:w-3/4 flex flex-col justify-between p-4">
        <div>
          <h5 className="text-xl sm:text-3xl font-bold text-black">{name}</h5>
          <p className="text-xs sm:text-sm font-light text-black">{location}</p>
        </div>
        <div>
          <span className="text-lg font-bold text-black">{type}</span>
          <span className="text-xs sm:text-sm font-light text-black">
            {end_date ? (
              <p>
                {start_date} - {end_date}
              </p>
            ) : (
              <p>{start_date}</p>
            )}
          </span>
        </div>
        <div className="flex flex-row flex-wrap">
          {link && (
            <Link
              className="px-4 py-2 mt-4 mr-4 w-fit text-xs sm:text-sm font-medium text-center text-black bg-white border border-black hover:text-white hover:bg-black"
              href={link}
              target="_blank"
            >
              Learn More
            </Link>
          )}
          {pannels && (
            <div className="flex flex-row flex-wrap">
              {pannels.map((p) => (
                <Link
                  key={p.name}
                  className="px-4 py-2 mr-4 mt-4 w-fit text-xs sm:text-sm font-medium text-center text-black bg-white border border-black hover:text-white hover:bg-black"
                  href={p.link}
                  target="_blank"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
