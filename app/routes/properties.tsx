import { MetaFunction } from "@remix-run/node";
import { string } from "joi";
import { Fragment } from "react";

type ManagedProperty = {
  name: string;
  description: string;
  airbnbUrl?: string;
  guests?: number;
  bedrooms: number;
  beds: number;
  baths: number;
  city: string;
  active: boolean;
  thumbnail: string;
  photos: string[];
};
const properties: Partial<ManagedProperty>[] = [
  {
    name: "Dedads",
    description: "Rustic Ranch 🏡 home with breath taking 🌅 views",
    airbnbUrl:
      "https://www.airbnb.com/rooms/27871611?source_impression_id=p3_1656687711_u5KS%2F59HwMYP3JRo",
    guests: 13,
    bedrooms: 5,
    beds: 6,
    baths: 3,
    city: "Saint Jo, Texas",
    active: true,
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
    description: "Rustic farmhouse with southern, musical charm",
    airbnbUrl:
      "https://www.airbnb.com/rooms/660826655277812867?source_impression_id=p3_1657809302_m5wBDLwfkWL6uwek",
    guests: 6,
    bedrooms: 2,
    baths: 2,
    city: "Saint Jo, Texas",
    active: true,
    thumbnail: "alphas/alphas-15.webp",
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
    description: "Quaint, Unique Rustic Barn Sleeps 6",
    airbnbUrl:
      "https://www.airbnb.com/rooms/660744141399123171?source_impression_id=p3_1657809436_ZZqvupNdOeOnKKYa",
    guests: 6,
    bedrooms: 2,
    baths: 1,
    city: "Saint Jo, Texas",
    active: true,
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
    description: "Rustic Ranch 🏡 home with breath taking 🌅 views",
    airbnbUrl:
      "https://www.airbnb.com/rooms/665938027103469888/photos/1443152485?source_impression_id=p3_1657808536_63NCryvunp7JzPrn",
    guests: 8,
    bedrooms: 4,
    baths: 2.5,
    city: "Muenster, Texas",
    photos: [
      "/img/behive/behive-15.jpeg",
      "img/behive/behive-3.jpeg",
      "img/behive/behive-18.jpeg",
      "img/behive/behive-2.jpeg",
      "img/behive/behive-14.jpeg",
      "img/behive/behive-9.jpeg",
      "img/behive/behive-13.jpeg",
      "img/behive/behive-5.jpeg",
      "img/behive/behive-4.jpeg",
      "img/behive/behive-12.jpeg",
      "img/behive/behive-8.jpeg",
      "img/behive/behive-7.jpeg",
      "img/behive/behive-11.jpeg",
      "img/behive/behive-10.jpeg",
      "img/behive/behive-6.jpeg",
      "img/behive/behive-tbn.jpeg",
      "img/behive/behive-1.jpeg",
      "img/behive/behive-17.jpeg",
      "img/behive/behive-16.jpeg",
      "img/behive/behive-0.jpeg",
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
    <div className="md:grid-cols-2 gap container-2xl container grid w-full gap-4">
      {properties.map((p) => {
        console.log("p: ", p);
        const subtitle = [
          `${p.guests} Guests`,
          `${p.bedrooms} Bedrooms`,
          `${p.beds} Beds`,
          `${p.baths} Baths`,
        ];

        return (
          <div className="card bg-base-100 card-bordered justify-center rounded-none shadow-sm">
            <figure className="carousel">
              {p?.photos?.map((photo) => (
                <div key={photo} className="carousel-item w-full">
                  <img
                    src={photo}
                    className=" object-cover w-auto"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              ))}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>
                {subtitle.map((txt, index) => (
                  <Fragment key={`sub-${index}`}>
                    {txt}
                    {index !== subtitle.length - 1 && (
                      <span className="mx-3 font-bold">·</span>
                    )}
                  </Fragment>
                ))}
              </p>
              <p>{p.description}</p>
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">{p.guests} Guests</div>
                <div className="badge badge-outline">{p.bedrooms} Bedrooms</div>
                <div className="badge badge-outline">{p.beds} Beds</div>
                <div className="badge badge-outline">{p.baths} Baths</div>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
