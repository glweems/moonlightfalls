import React from "react";
import { Form as RemixForm, FormProps } from "remix-forms";
import { SomeZodObject } from "zod";
import { cx } from "~/helpers";

export function Field({ className, ...props }: JSX.IntrinsicElements["div"]) {
  return (
    <div className={cx("form-control w-full my-4", className)} {...props} />
  );
}
function Button({ className, ...props }: JSX.IntrinsicElements["button"]) {
  return <button className={cx("btn", className)} {...props} />;
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
      !className && " focus:ring-blue-500 focus:border-blue-500"
    )}
    {...props}
  />
));
function SubmitButton(props: JSX.IntrinsicElements["button"]) {
  return (
    <div className="flex justify-end">
      <Button {...props} />
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
      !className && "border-base-400 focus:ring-blue-500 focus:border-blue-500"
    )}
    {...props}
  />
));

export default function Form<Schema extends SomeZodObject>(
  props: FormProps<Schema>
) {
  return (
    <RemixForm<Schema>
      multiline={["msg"]}
      inputComponent={Input}
      multilineComponent={TextArea}
      fieldComponent={Field}
      buttonComponent={SubmitButton}
      {...props}
    ></RemixForm>
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
