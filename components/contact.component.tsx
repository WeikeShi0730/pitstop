import { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { toast } from "react-toastify";
import Loading from "./loading.component";
import { useRouter } from "next/router";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_USER_ID!
      );
      router.push("/");
      setLoading(false);
      toast.success("Thanks for your email, we'll get back to you ASAP!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      setLoading(false);
      toast.error(
        "Sorry, it seems your message wasn't sent successfully, please try again!",
        {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-content flex justify-center items-center text-sm md:text-base">
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl m-auto my-10 text-slate-700 bg-slate-100 bg-opacity-30 rounded-lg py-8 px-10 shadow-md hover:shadow-slate-500 transition-all ease-in-out duration-200 font-light">
          <form ref={form} onSubmit={handleSubmit}>
            <h2 className="text-center text-lg md:text-2xl text-orange-theme mb-4">
              Contact us
            </h2>
            <p className="text-center text-slate-700 sm:w-2/3 w-full mx-auto mb-8">
              We want to hear from you! Please feel free to use the form below
              to speak your mind, and we actaully reply <span>😃</span>
            </p>
            <div className="relative mb-4 sm:w-2/3 w-full m-auto">
              <label htmlFor="name" className="relative text-sm md:text-base">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  placeholder=" "
                  required
                  className="w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none transition duration-200"
                />
                <span className="absolute left-0 top-0 px-2 transition duration-200 input-text">
                  Name
                </span>
              </label>
            </div>
            <div className="relative mb-4 sm:w-2/3 w-full m-auto">
              <label htmlFor="email" className="relative text-sm md:text-base">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  className="w-full p-2 border-b border-slate-700 outline-none bg-transparent mb-4 rounded-none transition duration-200"
                />
                <span className="absolute left-0 top-0 px-2 transition duration-200 input-text">
                  Email
                </span>
              </label>
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
