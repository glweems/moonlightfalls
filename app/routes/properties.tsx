import { MetaFunction } from "@remix-run/node";
import { string } from "joi";
import { FC, Fragment, MouseEventHandler, useState } from "react";
import { ChevronRight } from "tabler-icons-react";

type ManagedProperty = {
  name: string;
  description: string;
  airbnbUrl?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  baths?: number;
  city: string;
  active?: boolean;
  thumbnail: string;
  photos: string[];
};
const properties: ManagedProperty[] = [
  {
    name: "Dedads",
    description: `If you’re looking to get away from it all, this is the place to go. It is located in the scenic rolling hills of the North Texas Hill Country surrounded with mature, tall oak trees. Breathtaking views, beautiful sunsets, and stargazing skies create the perfect escape from the city. It’s a hiker’s dream, housing Montague County's highest peaks.

Enjoy the views while cooking the perfect meal with the industrial grade outdoor kitchen followed with smores around the fire pit and a glass of wine. The house is fully equipped with washer, dryer, and fully stocked kitchen. Stay in touch with cell phone boosters, WiFi, Netflix, Roku & DVD players.`,
    airbnbUrl:
      "https://www.airbnb.com/rooms/27871611?source_impression_id=p3_1656687711_u5KS%2F59HwMYP3JRo",
    guests: 13,
    bedrooms: 5,
    beds: 6,
    baths: 3,
    city: "Saint Jo, Texas",
    active: true,
    thumbnail: "img/dedads/tbn.jpeg",
    photos: [
      "img/dedads/dedads-32.jpeg",
      "img/dedads/dedads-24.jpeg",
      "img/dedads/dedads-28.jpeg",
      "img/dedads/dedads-12.jpeg",
      "img/dedads/dedads-45.jpeg",
      "img/dedads/dedads-3.jpeg",
      "img/dedads/dedads-2.jpeg",
      "img/dedads/dedads-44.jpeg",
      "img/dedads/dedads-13.jpeg",
      "img/dedads/dedads-29.jpeg",
      "img/dedads/dedads-48.jpeg",
      "img/dedads/dedads-25.jpeg",
      "img/dedads/dedads-33.jpeg",
      "img/dedads/dedads-38.jpeg",
      "img/dedads/dedads-14.jpeg",
      "img/dedads/dedads-43.jpeg",
      "img/dedads/dedads-5.jpeg",
      "img/dedads/dedads-34.jpeg",
      "img/dedads/dedads-22.jpeg",
      "img/dedads/dedads-18.jpeg",
      "img/dedads/dedads-9.jpeg",
      "img/dedads/dedads-8.jpeg",
      "img/dedads/dedads-19.jpeg",
      "img/dedads/dedads-23.jpeg",
      "img/dedads/dedads-35.jpeg",
      "img/dedads/dedads-4.jpeg",
      "img/dedads/dedads-42.jpeg",
      "img/dedads/dedads-15.jpeg",
      "img/dedads/dedads-39.jpeg",
      "img/dedads/dedads-7.jpeg",
      "img/dedads/dedads-41.jpeg",
      "img/dedads/dedads-16.jpeg",
      "img/dedads/dedads-20.jpeg",
      "img/dedads/dedads-36.jpeg",
      "img/dedads/dedads-37.jpeg",
      "img/dedads/dedads-21.jpeg",
      "img/dedads/dedads-17.jpeg",
      "img/dedads/dedads-40.jpeg",
      "img/dedads/dedads-6.jpeg",
      "img/dedads/dedads-26.jpeg",
      "img/dedads/dedads-30.jpeg",
      "img/dedads/dedads-1.jpeg",
      "img/dedads/dedads-47.jpeg",
      "img/dedads/dedads-10.jpeg",
      "img/dedads/dedads-11.jpeg",
      "img/dedads/dedads-46.jpeg",
      "img/dedads/dedads-0.jpeg",
      "img/dedads/dedads-31.jpeg",
      "img/dedads/dedads-27.jpeg",
    ],
  },
  {
    name: "Alphas",
    description: `Kick back and relax in this music-themed, stylish space after visiting Saint Jo’s hot spots! Whether you visit the wineries or Red River Station BBQ for live music, Alpha’s Palace is the perfect place for you.`,
    airbnbUrl:
      "https://www.airbnb.com/rooms/660826655277812867?source_impression_id=p3_1657809302_m5wBDLwfkWL6uwek",
    guests: 6,
    bedrooms: 2,
    baths: 2,
    city: "Saint Jo, Texas",
    active: true,
    thumbnail: "img/alphas/tbn.jpg",
    photos: [
      "img/alphas/alphas-22.webp",
      "img/alphas/alphas-18.webp",
      "img/alphas/alphas-3.webp",
      "img/alphas/alphas-14.webp",
      "img/alphas/alphas-15.webp",
      "img/alphas/alphas-2.webp",
      "img/alphas/alphas-19.webp",
      "img/alphas/alphas-23.webp",
      "img/alphas/alphas-28.webp",
      "img/alphas/alphas-5.webp",
      "img/alphas/alphas-12.webp",
      "img/alphas/alphas-24.webp",
      "img/alphas/alphas-9.webp",
      "img/alphas/alphas-8.webp",
      "img/alphas/alphas-25.webp",
      "img/alphas/alphas-13.webp",
      "img/alphas/alphas-4.webp",
      "img/alphas/alphas-29.webp",
      "img/alphas/alphas-10.webp",
      "img/alphas/alphas-7.webp",
      "img/alphas/alphas-30.webp",
      "img/alphas/alphas-26.webp",
      "img/alphas/alphas-27.webp",
      "img/alphas/alphas-6.webp",
      "img/alphas/alphas-11.webp",
      "img/alphas/alphas-20.webp",
      "img/alphas/alphas-16.webp",
      "img/alphas/alphas-1.webp",
      "img/alphas/alphas-0.webp",
      "img/alphas/alphas-17.webp",
      "img/alphas/alphas-21.webp",
    ],
  },
  {
    name: "Bulls Den",
    description:
      "Get away from it all when you stay under the stars in our unique “Bull’s Den” rustic, western adorned cabin. Located just outside the historical town of Saint Jo. Escape the city and enjoy the quiet days & star-filled night skies! Relax in the country the duration of your stay or head into town & enjoy the best burger in North Texas at the Windmill Grill or delicious BBQ and live music at Red River Station. Make a trip to the vineyards to enjoy the hillside views with a glass of wine!",
    airbnbUrl:
      "https://www.airbnb.com/rooms/660744141399123171?source_impression_id=p3_1657809436_ZZqvupNdOeOnKKYa",
    guests: 6,
    bedrooms: 2,
    baths: 1,
    city: "Saint Jo, Texas",
    active: true,
    thumbnail: "img/bulls-den/tbn.webp",
    photos: [
      "img/bulls-den/bullsden-6.jpeg.webp",
      "img/bulls-den/bullsden-0.jpeg.webp",
      "img/bulls-den/bullsden-8.jpeg",
      "img/bulls-den/bullsden-3.jpeg",
      "img/bulls-den/bullsden-7.jpeg.webp",
      "img/bulls-den/bullsden-1.jpeg.webp",
      "img/bulls-den/bullsden-9.jpeg.webp",
      "img/bulls-den/bullsden-4.jpeg.webp",
      "img/bulls-den/bullsden-15.webp",
      "img/bulls-den/bullsden-10.jpeg.webp",
      "img/bulls-den/bullsden-2.jpeg.webp",
      "img/bulls-den/bullsden-11.JPG",
      "img/bulls-den/bullsden-5.jpeg.webp",
      "img/bulls-den/bullsden-13.JPG",
    ],
  },
  {
    name: "Beehive",
    description: `Reconnect with loved ones in this family-friendly place.
This comfortable and cozy ranch home is located on 16 acres in mesmerizing North Texas Hill Country.
While remote, this property is close to historic Muenster and the German-themed restaurants and events. Less than half a mile away, the Blue Ostrich winery is walking distance. Visit during Oktoberfest and see the heritage sites. Roast s’mores on our fire pit area, rest on hammocks or enjoy sunrise and sunsets on the wrap around porch.`,
    airbnbUrl:
      "https://www.airbnb.com/rooms/665938027103469888/photos/1443152485?source_impression_id=p3_1657808536_63NCryvunp7JzPrn",
    guests: 8,
    bedrooms: 4,
    baths: 2.5,
    city: "Muenster, Texas",
    thumbnail: "img/beehive/tbn.jpeg",
    photos: [
      "/img/beehive/beehive-15.jpeg",
      "img/beehive/beehive-3.jpeg",
      "img/beehive/beehive-18.jpeg",
      "img/beehive/beehive-2.jpeg",
      "img/beehive/beehive-14.jpeg",
      "img/beehive/beehive-9.jpeg",
      "img/beehive/beehive-13.jpeg",
      "img/beehive/beehive-5.jpeg",
      "img/beehive/beehive-4.jpeg",
      "img/beehive/beehive-12.jpeg",
      "img/beehive/beehive-8.jpeg",
      "img/beehive/beehive-7.jpeg",
      "img/beehive/beehive-11.jpeg",
      "img/beehive/beehive-10.jpeg",
      "img/beehive/beehive-6.jpeg",
      "img/beehive/beehive-tbn.jpeg",
      "img/beehive/beehive-1.jpeg",
      "img/beehive/beehive-17.jpeg",
      "img/beehive/beehive-16.jpeg",
      "img/beehive/beehive-0.jpeg",
    ],
  },

  // 8 guests · 4 bedrooms · 4 beds · 2.5 baths
];

export const meta: MetaFunction = () => {
  return {
    title: "Properties",
    description: "Properties managed by the Moonlight Falls",
  };
};
export default function PropertiesPage() {
  return (
    <section className="bg-white">
      <div className="sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl w-full px-5 py-6 mx-auto space-y-5">
        <div className="sm:px-5 gap-x-8 gap-y-16 grid grid-cols-12 pb-10">
          {properties.map((p) => (
            <Card key={p.name} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card: FC<{ property: ManagedProperty }> = ({ property: p }) => {
  const [showMore, setShowMore] = useState(false);
  const handleClick: MouseEventHandler<HTMLParagraphElement> = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <div className="sm:col-span-6 xl:col-span-4 flex flex-col items-start w-full col-span-12 space-y-3">
      <img
        className="h-50 object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm"
        src={p.thumbnail}
      />

      <h2 className="sm:text-xl md:text-2xl text-lg font-bold">
        <a href="#_">{p.name}</a>
      </h2>

      <p className="text-xs font-medium">
        {p.guests && (
          <span className="mx-1 text-gray-600">{p.guests} guests ·</span>
        )}

        {p.bedrooms && (
          <span className="mx-1 text-gray-600">{p.bedrooms} bedrooms ·</span>
        )}

        {p.beds && <span className="mx-1 text-gray-600">{p.beds} beds ·</span>}

        {p.baths && <span className="mx-1 text-gray-600">{p.baths} baths</span>}
      </p>

      <p className="text-xs font-medium">
        <a href="#_" className="mr-1 underline">
          {p.city}
        </a>
      </p>

      <p
        className="flex flex-col text-sm text-gray-500 cursor-pointer"
        onClick={handleClick}
      >
        {!showMore ? `${p.description.substring(0, 150)}...` : p.description}
        <div className="hover:underline flex items-center pt-2">
          <span className="font-medium">Show more</span>
          <ChevronRight size={15} className="inline-block" />
        </div>
      </p>
    </div>
  );
};
