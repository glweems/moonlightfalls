import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import Animated from "~/components/Animated";
import { CleaningSection } from "~/components/landing";
import { company, landingPoints } from "~/data";
import { cx, isEven } from "~/helpers";

export const meta: MetaFunction = () => {
  return {
    title: `Short Term Rental Management - ${company.name}`,
    description: company.description,
  };
};

export default function Index() {
  return (
    <div className="overflow-contain overscroll-contain">
      <div
        className="hero backdrop-blur-sm w-full h-screen"
        style={{
          backgroundImage: "url(./bulls-den.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="backdrop-blur-sm max-w-lg">
            <h1 className="mb-5 text-4xl font-bold">
              Airbnb Property Management & Cleaning Service
            </h1>
            <p className="mb-5">
              Professional vacation rental hosting and management. We provide
              guest-driven hospitality services in North Texas including event
              planning & concierge services.
            </p>
            <Link to="/contact" className="btn btn-primary">
              get started
            </Link>
          </div>
        </div>
      </div>
      <section className="grid grid-rows-[repeat(4,_50vh)]">
        <Animated
          className={cx("flex container items-center justify-center flex-row")}
        >
          <img src="/img/cleanup.svg" />
          <h3 className={cx("text-3xl font-bold")}>
            In House Cleaning Service Prepares Property for The Next Guest
          </h3>
        </Animated>
        <Animated
          className={cx("flex container items-center justify-center flex-row")}
        >
          <img src="/img/charts.svg" />
          <h3 className={cx("text-3xl font-bold")}>
            In House Cleaning Service Prepares Property for The Next Guest
          </h3>
        </Animated>
        {landingPoints.map((point, index) => (
          <Animated
            key={index}
            className={cx(
              "flex container items-center justify-center flex-row"
            )}
          >
            {/* <img src="/img/cleanup.svg" /> */}
            <point.icon size={50} className="stroke-blue-500 mx-auto" />
            <h3 className={cx("text-3xl font-bold")}>{point.text}</h3>
          </Animated>
        ))}
      </section>
      <section className="">
        {/* <CleaningSection /> */}
        <div className="container px-4 mx-auto">
          <img src="/img/cleanup.svg" />
          <h3 className="text-3xl font-bold">
            In House Cleaning Service Prepares Property for The Next Guest
          </h3>
        </div>
      </section>
    </div>
  );
}
/*
      <div className="lg:grid-cols-4 grid grid-cols-1">
        {landingPoints.map((point, index) => (
          <div
            className={cx(
              "min-h-30 text-center flex flex-row items-center mdg:flex-col",
              isEven(index) ? "bg-slate-50" : "bg-slate-300"
            )}
            key={index}
          >
            <div>
              <point.icon size={50} className="stroke-blue-500 mx-auto" />
            </div>
            <div>
              <h3 className={cx("text-xl")}>{point.text}</h3>
            </div>
          </div>
        ))}
      </div> */
