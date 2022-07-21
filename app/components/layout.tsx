import { Link, NavLink } from "@remix-run/react";
import type { FC, HTMLAttributes, MouseEventHandler } from "react";
import { Fragment, useState } from "react";
import {
  Bed,
  Menu,
  Phone,
  X,
  MailOpened,
  BrandMessenger,
  BrandFacebook,
} from "tabler-icons-react";
import { company, sitemap } from "~/data";
import { cx } from "~/helpers";

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const handleClick: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    setOpen((current) => !current);
  };
  return (
    <nav
      className="flex items-center w-full h-24 bg-indigo-600 select-none"
      x-data="{ showMenu: false }"
    >
      <div className="md:justify-center relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium">
        <NavLink to="/" className="md:pl-4 md:py-0 w-1/3 py-4 pl-6 pr-4">
          <span className="p-1 text-xl font-black leading-none text-white select-none">
            <span>Moonlight Falls</span>
            <span className="text-indigo-300">.</span>
          </span>
        </NavLink>
        <div
          className={cx(
            !open && "hidden",
            "md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex justify-center fixed top-0 left-0 z-40 items-center  w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50"
          )}
        >
          <div className="md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto flex-col w-full overflow-hidden bg-white rounded-lg select-none">
            <div className="md:text-indigo-200 md:mt-0 md:flex-row md:items-center flex flex-col items-center justify-end w-full h-full mt-12 text-center text-indigo-700">
              {sitemap.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={handleClick}
                  className="md:text-white md:px-0 lg:mx-3 md:text-center inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <button
          className="md:hidden hover:bg-gray-900 hover:bg-opacity-10 absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 text-gray-100 rounded-full cursor-pointer"
          onClick={handleClick}
        >
          {open ? (
            <svg
              className="stroke-indigo-600 w-6 h-6"
              x-show="showMenu"
              fill="none"
              stroke="indigo-600"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 stroke-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="sm:px-6 lg:px-8 max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {sitemap.map((link) => (
            <div key={link.path} className="px-5 py-2">
              <NavLink
                to={link.path}
                className="hover:text-gray-900 text-base leading-6 text-gray-500"
              >
                {link.title}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="tel:2147187017"
            className="hover:text-gray-500 text-gray-400"
          >
            <Phone size={20} className="mr-3" />
            <span className="sr-only">(214) 718-7017</span>
          </a>
          <a
            href={company.contact.facebook.url}
            target="_blank"
            className="hover:text-gray-500 text-gray-400"
          >
            <span className="sr-only">Facebook</span>
            <BrandFacebook />
          </a>
          <a
            href="mailto:Christilyn74@gmail.com"
            className="hover:text-gray-500 text-gray-400"
          >
            <MailOpened size={20} className="mr-3" />
            <span className="sr-only">christilyn74@gmail.com</span>
          </a>
          <a
            href={company.contact.messenger}
            target="_blank"
            className="hover:text-gray-500 text-gray-400"
          >
            <BrandMessenger size={26} className=" mr-3" />
            <span className="sr-only">Messenger</span>
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © {year} Moonlight Falls, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export const ContactOptions: FC<HTMLAttributes<HTMLUListElement>> = (props) => (
  <ul {...props}>
    <li className=" my-3">
      <a href="tel:2147187017" className="flex items-center">
        <Phone size={20} className="mr-3" />
        (214) 718-7017
      </a>
    </li>

    <li className="py-4">
      <a href="mailto:Christilyn74@gmail.com" className="flex items-center">
        <MailOpened size={20} className="mr-3" />
        <span>christilyn74@gmail.com</span>
      </a>
    </li>

    <li className="hover:stroke-blue-600 py-4">
      <a
        href={company.contact.messenger}
        target="_blank"
        className="flex items-center"
      >
        <BrandMessenger size={26} className=" mr-3" />
        Messenger
      </a>
    </li>
    <li className="py-4">
      <a
        href={company.contact.facebook.url}
        target="_blank"
        className="flex items-center"
      >
        <BrandFacebook size={26} className="mr-3" />
        Facebook
      </a>
    </li>
  </ul>
);
