import { z } from "zod";

const schema = z.object({
  firstName: z.string().nonempty(),
  email: z.string().nonempty().email(),
});
import { makeDomainFunction } from "remix-domains";
import { Form } from "remix-forms";

const mutation = makeDomainFunction(schema)(
  async (values) => await console.log(values)
);

const ContactForm = () => {
  return (
    <Form schema={schema}>
      {({ Field, Errors, Button }) => (
        <>
          <Field name="firstName" label="First name" />
          <Field name="email" label="E-mail" />
          <em>You'll hear from us at this address 👆🏽</em>
          <Errors />
          <Button />
        </>
      )}
    </Form>
  );
};

export default ContactForm;
