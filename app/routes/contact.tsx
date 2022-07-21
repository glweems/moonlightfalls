import {
  Link,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";

import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { withYup } from "@remix-validated-form/with-yup";
import { useEffect, useRef } from "react";
import { validationError } from "remix-validated-form";
import * as yup from "yup";
import { ContactOptions } from "~/components/layout";
import { sendEmail } from "~/mailer.server";
import { InputError, makeDomainFunction } from "remix-domains";
import { Form } from "@remix-run/react";

import { formAction } from "remix-forms";
import { z } from "zod";
import ContactForm, { mutation, schema } from "~/components/ContactForm.old";
// import ContactForm from "~/components/ContactForm";

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/",
  });

export const loader: LoaderFunction = ({ request, ...rest }) => {
  return {
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  };
};
export const meta: MetaFunction = () => {
  return {
    title: "Contact",
    description: "Moonlight Falls contact page",
  };
};
export default function ContactPage() {
  const { defaultValues, ...rest } = useLoaderData();
  console.log("defaultValues: ", defaultValues);
  console.log("rest: ", rest);
  const actionData = useActionData();

  const transition = useTransition();

  const state: "idle" | "success" | "error" | "submitting" =
    transition.submission
      ? "submitting"
      : actionData?.success
      ? "success"
      : actionData?.error
      ? "error"
      : "idle";

  const inputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (state === "error") {
      inputRef.current?.focus();
    }

    if (state === "idle" && mounted.current) {
      inputRef.current?.select();
    }

    if (state === "success") {
      successRef.current?.focus();
    }

    mounted.current = true;
  }, [state]);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex-row flex flex-col">
          <div className="lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100 relative w-full bg-cover">
            <div className="lg:px-16 lg:my-0 relative flex flex-col items-center justify-center w-full h-full px-10 my-20">
              <div className="lg:max-w-3xl flex flex-col items-start space-y-8 tracking-tight">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-700 uppercase">
                    Work smarter
                  </p>
                  <h2 className="xl:text-6xl text-5xl font-bold text-gray-900">
                    Get in touch
                  </h2>
                </div>
                <p className="text-2xl text-gray-700">
                  We've created a simple formula to follow in order to gain more
                  out of your business and your application.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 xl:w-5/12 w-full bg-white">
            <div className="lg:p-16 xl:p-24 flex flex-col items-start justify-start w-full h-full p-10">
              <h4 className="w-full text-3xl font-bold">Contact</h4>
              <ContactForm />
              {/* <Form method="post" className="relative w-full mt-10 space-y-8">
                <div className="relative">
                  <label className="font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    className="focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Message</label>
                  <textarea
                    name="message"
                    className="focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg"
                    rows={5}
                    placeholder="Message"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="hover:bg-indigo-500 ease inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-400 rounded-lg"
                  >
                    Send
                  </button>
                </div>
              </Form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*

*/
