// import { ActionFunction } from "@remix-run/node";d
import {
  Link,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";

import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { withYup } from "@remix-validated-form/with-yup";
import { useEffect, useRef } from "react";
import { validationError } from "remix-validated-form";
import * as yup from "yup";
// import { ContactForm } from "~/components/ContactForm.old";
import { ContactOptions } from "~/components/layout";
import { sendEmail } from "~/mailer.server";
import { makeDomainFunction } from "remix-domains";

export const validator = withYup(
  yup.object({
    name: yup.string().label("Name").required(),
    email: yup.string().email().label("Email").required(),
    msg: yup.string().label("Message").required(),
  })
);

// const schema = Joi.object<ContactFormFields>({
//   name: Joi.string().required(),
import { Form, formAction } from "remix-forms";
//   email: Joi.string().required(),
//   msg: Joi.string().required(),
// });
import { z } from "zod";
import ContactForm from "~/components/ContactForm";

export const schema = z.object({
  name: z.string().nonempty("Required"),
  email: z.string().nonempty().email("Required"),
  msg: z.string().nonempty("Required"),
});

const mutation = makeDomainFunction(schema)(
  async (values) => await sendEmail(values) /* or anything else */
);

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    // successPath: /* path to redirect on success */,
  });

// export const action: ActionFunction = async ({ request }) => {
//   const fieldValues = await validator.validate(await request.formData());
//   if (fieldValues.error) return validationError(fieldValues.error);

//   const res = await sendEmail(fieldValues.data);

//   return json(res);
// };

export const loader: LoaderFunction = ({ request, ...rest }) => {
  console.log("rest: ", rest);
  return {
    defaultValues: {
      name: "",
      email: "",
      msg: "",
    },
  };

  /*

  const url = new URL(request.url);
    if (url.search !== "")
    return json(
      setFormDefaults("contact", {
        name: "John",
        email: "Doe",
      })
    );
   */
};

export default function ContactPage() {
  const { defaultValues } = useLoaderData();
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
    <div className="hero bg-base-200 w-full min-h-screen">
      <div className="hero-content place-content-center grid justify-center w-full grid-cols-2">
        <h1 className="col-span-2 text-5xl font-bold">
          Hire Us to Manage Your Vacation Rental
        </h1>
        <ContactForm
          schema={schema}
          labels={{ name: "Name", email: "Email", msg: "Message" }}
          className="w-full max-w-[30rem] align-center col-span-2 md:col-span-1"
        />
        <ContactOptions className="md:col-span-1 col-span-2" />
      </div>
    </div>
  );
}
/*
       <Form
            replace
            method="post"
            aria-hidden={state === "success"}
            className={`${state === "success" ? "hidden" : ""} transition`}
          >
            <h2>Subscribe!</h2>
            <p>Don't miss any of the action!</p>
            <input
              aria-label="Email address"
              aria-describedby="error-message"
              ref={inputRef}
              type="text"
              name="name"
              placeholder="you@example.com"
            />
            <input
              aria-label="Email address"
              aria-describedby="error-message"
              // ref={inputRef}
              type="email"
              name="email"
              placeholder="you@example.com"
            />
            <textarea
              aria-label="Email address"
              aria-describedby="error-message"
              // ref={inputRef}
              name="msg"
              placeholder="you@example.com"
            />
            <button type="submit">
              {state === "submitting" ? "Subscribing..." : "Subscribe"}
            </button>

            <p id="error-message">
              {state === "error" ? actionData.message : <>&nbsp;</>}
            </p>
          </Form>
*/
