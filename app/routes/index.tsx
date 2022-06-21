import type { MetaFunction } from "@remix-run/node";
import { company, landingPoints } from "~/data";

export const meta: MetaFunction = () => {
  return {
    title: `Short Term Rental Management - ${company.name}`,
    description: company.description,
  };
};

export default function Index() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(./bulls-den.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Maximize Your Short-Term Rental for Less
            </h1>
            <p className="mb-5">
              Evolve partners with you and takes on the time-consuming tasks of
              vacation rental management so you can earn more and stress less.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-4 my-4">
        {landingPoints.map((point, index) => (
          <div
            className="card bg-base-200 border-base-300 border-2 shadow-xl"
            key={index}
          >
            <div className="card-body">
              <div className="w-full text-center">
                <point.icon size={50} className="stroke-primary" />
              </div>
              <h3 className="card-title">{point.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
