import type { Icon } from "tabler-icons-react";
import {
  Briefcase,
  BuildingLighthouse,
  Home,
  ReportMoney,
} from "tabler-icons-react";

type SiteMapLink = {
  path: string;
  title: string;
  description: string;
};

export const company = {
  name: "Moonlight Falls",
  description: "ShortProperty Management",
  url: "https://moonlightfalls.com",
  logo: "https://moonlightfalls.com/logo.png",
  copyright: `Copyright © ${new Date().getFullYear()} - All right reserved by Moonlight Falls`,
  contact: {
    email: "christilyn74@gmail.com",
    phone: "2147187017",
    facebook: {
      username: "MoonlightFallsStJo",
      url: "https://facebook.com/MoonlightFallsStJo",
    },
    messenger: "https://m.me/MoonlightFallsStJo",
  },
};

export const managementFeatures = [
  {
    text: "Higher Profit Margins Than Your Traditional Rental Portfolio",
    icon: <BuildingLighthouse />,
  },
  {
    text: "In House Cleaning Service Prepares Property for The Next Guest",
    icon: <ReportMoney />,
  },
  {
    text: "24/7 Booking Customer Service and Maintenance Requests Taken Care of Around The Clock",
    icon: <ReportMoney />,
  },
];

/*

/*

Higher Profit Margins Than Your Traditional Rental Portfolio






In House Cleaning Service Prepares Property for The Next Guest

24/7 Booking Customer Service and Maintenance Requests Taken Care of Around The Clock
*/

export const sitemap: SiteMapLink[] = [
  {
    title: "About",
    path: "/about",
    description: "About page",
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Contact page",
  },
  {
    title: "Properties",
    path: "/properties",
    description: "Blog page",
  },
];

type LandingPoint = {
  text: string;
  icon: Icon;
};

export const landingPoints: LandingPoint[] = [
  {
    text: "Outperform the market with our  advanced revenue technology",
    icon: Briefcase,
  },
  {
    text: "Leave the pressure of marketing, booking, and pricing your property to the experts",
    icon: Home,
  },
  {
    text: "Keep more of what you earn with our industry-low 10% fee",
    icon: ReportMoney,
  },
  {
    text: "Don't worry about long-term commitments with restrictive policies",
    icon: BuildingLighthouse,
  },
];

