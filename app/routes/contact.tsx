const form = {
  "first name": {},
};
const inputClassName = `input input-bordered w-full max-w-sm`;

export default function ContactPage() {
  return (
    <div className="container flex-col justify-center">
      <h1 className="text-2xl font-bold text-center">
        Got any questions? Let’s talk about it.
      </h1>
      <div className="w-full max-w-sm p-4">
        {/* FIRST NAME */}
        <div className="form-control w-full">
          <input placeholder="Name" type="text" className={inputClassName} />
        </div>

        {/* EMAIL */}
        <div className="form-control w-full max-w-sm">
          <input placeholder="Email" type="email" className={inputClassName} />
        </div>

        {/* MESSAGE */}
        <div className="form-control w-full max-w-sm">
          <textarea
            placeholder="Message..."
            className="textarea textarea-bordered w-full max-w-sm"
            rows={5}
          />
        </div>
        {/* SUBMIT */}
        <div className="form-control w-full max-w-sm my-4">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
