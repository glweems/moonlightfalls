import { Link, NavLink } from "@remix-run/react";
import type { FC, MouseEventHandler } from "react";
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

export const Navbar: FC = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <NavLink to="/" className="btn btn-ghost text-xl normal-case">
        {company.name}
      </NavLink>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        {sitemap.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                [
                  isActive
                    ? "text-primary"
                    : "text-base-500 hover:text-base-300/75",
                  "transition",
                ].join(" ")
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Footer: FC = () => (
  <footer className="footer footer-center bg-base-200 text-base-content p-10 rounded">
    <div className="grid grid-flow-col gap-4">
      {sitemap.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.title}
        </NavLink>
      ))}
    </div>
    <div>
      <div className="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </div>
    <div>
      <p>{company.copyright}</p>
    </div>
  </footer>
);

export const ContactOptions: FC = () => (
  <ul className="rounded-box w-full p-2 text-xl list-none">
    <li className="p-2">
      <a href="tel:2147187017" className="flex items-center">
        <Phone size={20} className="mr-3" />
        (214) 718-7017
      </a>
    </li>

    <li className="p-2">
      <a href="mailto:Christilyn74@gmail.com" className="flex items-center">
        <MailOpened size={20} className="mr-3" />
        <span>christilyn74@gmail.com</span>
      </a>
    </li>

    <li className="hover:stroke-blue-600 p-2">
      <a
        href={company.contact.messenger}
        target="_blank"
        className="flex items-center"
      >
        <BrandMessenger size={26} className=" mr-3" />
        Messenger
      </a>
    </li>
    <li className="p-2">
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
