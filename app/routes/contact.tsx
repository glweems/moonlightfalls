// import { ActionFunction } from "@remix-run/node";d
import { useLoaderData } from "@remix-run/react";

import Joi from "joi";
import * as yup from "yup";
import { msgNotification } from "~/mailer.server";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { withYup } from "@remix-validated-form/with-yup";
import { setFormDefaults, validationError } from "remix-validated-form";
import { ContactForm, ContactFormFields } from "~/components/ContactForm";
import { ContactOptions } from "~/components/layout";

export const validator = withYup(
  yup.object({
    name: yup.string().label("Name").required(),
    email: yup.string().email().label("Email").required(),
    msg: yup.string().label("Message").required(),
  })
);

const schema = Joi.object<ContactFormFields>({
  name: Joi.string().required(),
  email: Joi.string().required(),
  msg: Joi.string().required(),
});

export const action: ActionFunction = async ({ request }) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);
  const { name, email, msg } = fieldValues.data;

  await msgNotification(name, email, msg).then((info) =>
    json(
      setFormDefaults("contact", {
        name: "John",
        email: "Doe",
      })
    )
  );

  return redirect("/contact?success=true");
};
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
  const { defaultValues, ...rest } = useLoaderData();
  return (
    <div className="grid items-center w-full grid-cols-3">
      <div className="bg-base-100 w-full h-full col-span-2">
        <ContactForm defaultValues={defaultValues} />
      </div>
      <div className=" bg-primary-content bg-base-300 w-full h-full">
        <ContactOptions />
      </div>
    </div>
  );
}
