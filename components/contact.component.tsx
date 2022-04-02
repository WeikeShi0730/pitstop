import { useRef } from "react";
import Loading from "./loading.component";

const Contact = ({ submitForm, loading }:any) => {
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-content flex justify-center items-center text-sm md:text-base">
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl m-auto my-10 text-slate-700 bg-slate-100 bg-opacity-30 rounded-lg py-8 px-10 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200 font-light">
          <form ref={form} name="contact" onSubmit={submitForm}>
            <h2 className="text-center text-lg md:text-2xl text-orange-theme mb-4">
              Contact us
            </h2>
            <p className="text-center text-slate-700 sm:w-2/3 w-full mx-auto mb-8">
              We want to hear from you! Please feel free to use the form below
              to speak your mind, and we actaully reply <span>😃</span>
            </p>
            <div className="relative mb-4 sm:w-2/3 w-full m-auto">
              <label htmlFor="name" className="text-sm md:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                autoComplete="off"
                required
                onChange={handleChange}
                className="text-sm md:text-base w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none"
              />
            </div>
            <div className="relative mb-4 sm:w-2/3 w-full m-auto">
              <label htmlFor="email" className="text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                onChange={handleChange}
                className="text-sm md:text-base w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none"
              />
            </div>
            <div className="relative mb-4 sm:w-2/3 w-full m-auto">
              <label htmlFor="message" className="text-sm md:text-base">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                onChange={handleChange}
                className="text-sm md:text-base w-full h-auto p-2 border border-slate-700 outline-none bg-transparent my-4 rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="text-sm md:text-base bg-slate-700 py-2 px-4 text-slate-100 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
