import React from "react";
import { makeDomainFunction } from "remix-domains";
import { Form as RemixForm, FormProps } from "remix-forms";
import { SomeZodObject, z } from "zod";
import { cx } from "~/helpers";
import { sendEmail } from "~/mailer.server";

export const schema = z.object({
  name: z.string().nonempty("Required"),
  email: z.string().nonempty().email(),
  message: z.string().nonempty("Required"),
});

export const mutation = makeDomainFunction(schema)(
  async (values) => await sendEmail(values) /* or anything else */
);

const placeholders = {
  name: "Enter Your Name",
  email: "Enter Your Email Address",
  message: "Message",
};

export default function Form() {
  return (
    <RemixForm<typeof schema>
      schema={schema}
      multiline={["message"]}
      inputComponent={Input}
      multilineComponent={TextArea}
      fieldComponent={Field}
      buttonComponent={SubmitButton}
      className="relative w-full mt-10 space-y-8"
      labelComponent={({ className, ...props }, ref) => (
        <label
          className={cx(className, "font-medium text-gray-900")}
          {...props}
        />
      )}
      placeholders={placeholders}
      errorComponent={({ children, ...props }) => (
        <small className="text-red-500" {...props}>
          {children}
        </small>
      )}
    />
  );
}
// className={/* your form classes */}
// fieldComponent={/* your custom Field */}
// labelComponent={/* your custom Label */}
// inputComponent={/* your custom Input */}
// multilineComponent={/* your custom Multiline */}
// selectComponent={/* your custom Select */}
// checkboxComponent={/* your custom Checkbox */}
// checkboxWrapperComponent={/* your custom checkbox wrapper */}
// buttonComponent={/* your custom Button */}
// fieldErrorsComponent={/* your custom FieldErrors */}
// globalErrorsComponent={/* your custom GlobalErrors */}
// errorComponent={/* your custom Error */}
function Field({ className, ...props }: JSX.IntrinsicElements["div"]) {
  return (
    <div className={cx("form-control w-full my-4", className)} {...props} />
  );
}
function Button({ ...props }: JSX.IntrinsicElements["button"]) {
  return <button {...props} />;
}

const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>(({ type = "text", className, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cx(
      "input",
      className,
      !className &&
        "focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg"
    )}
    {...props}
  />
));
function SubmitButton({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <div className="relative">
      <Button
        className={cx(
          className,
          "hover:bg-indigo-500 ease inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-400 rounded-lg"
        )}
        {...props}
      >
        Send
      </Button>
    </div>
  );
}
const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements["textarea"]
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cx(
      "textarea",
      className,
      "focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg"
    )}
    {...props}
  />
));
