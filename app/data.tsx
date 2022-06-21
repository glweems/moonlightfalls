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
};

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
/*


*/
