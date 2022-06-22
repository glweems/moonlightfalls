import { useLoaderData } from "@remix-run/react";
export type ContactFormFields = {
  name: string;
  email: string;
  msg: string;
};
import {
  useField,
  useFormContext,
  useIsSubmitting,
  ValidatedForm,
} from "remix-validated-form";
import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { validator } from "~/routes/contact";

type ContactFormProps = {
  defaultValues: ContactFormFields;
};
export const ContactForm: FC<ContactFormProps> = ({ defaultValues }) => {
  return (
    <section className="max-w-sm">
      <h1 className=" text-2xl font-bold">Got any questions?</h1>
      <p>Let’s talk about it.</p>
      <small>
        Send us a message and we will respond within 24 hours. Also in the
        weekend.
      </small>
      <ValidatedForm
        id="contact"
        method="post"
        validator={validator}
        defaultValues={defaultValues}
        className="w-full py-4 mx-auto my-4"
      >
        {/* FIRST NAME */}
        <MyInput name="name" placeholder="Name" className={inputClassName} />
        {/* EMAIL */}
        <MyInput
          name="email"
          placeholder="Email"
          type="email"
          className={inputClassName}
        />
        {/* MESSAGE */}
        <MyInput
          name="msg"
          placeholder="Message..."
          element="textarea"
          className="textarea textarea-bordered w-full"
          rows={5}
        />
        {/* SUBMIT */}
        <div className="form-control w-full my-4">
          <MySubmitButton />
        </div>
      </ValidatedForm>
    </section>
  );
};
export const inputClassName = `input input-bordered w-full`;

type MyInputProps =
  | InputHTMLAttributes<HTMLInputElement> &
      (TextareaHTMLAttributes<HTMLTextAreaElement> & {
        name: string;
        label?: string;
        element?: "input" | "textarea";
      });

export const MyInput = ({
  element = "input",
  name,
  label,
  ...props
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="form-control w-full mb-4">
      {label && <label htmlFor={name}>{label}</label>}
      {error && <small className="mb-2 text-right text-red-800">{error}</small>}
      {React.createElement(element, { ...getInputProps(), ...props })}
    </div>
  );
};

export const MySubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  const { isValid } = useFormContext();
  const disabled = isSubmitting || !isValid;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={!disabled ? "btn btn-primary" : "btn btn-disabled"}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};
