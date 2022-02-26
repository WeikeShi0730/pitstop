import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_USER_ID!
      );
      alert("Thanks for your email, we'll get back to you ASAP!");
    } catch (error) {
      console.error(error);
      alert(
        "Sorry, it seems your message wasn't sent successfully, please try again!"
      );
    }
  };

  return (
    <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex justify-center items-center m-auto my-16 h-full text-slate-700 bg-slate-50 bg-opacity-50 backdrop-blur-md rounded-lg py-8 px-10 shadow-md hover:shadow-lg hover:shoadw-slate-700 transition-all ease-in-out duration-200 font-light">
      <form ref={form} name="contact" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl text-orange-theme mb-4">
          Contact us
        </h2>
        <p className="text-center text-slate-700 sm:w-2/3 w-full mx-auto mb-8">
          We want to hear from you! Please feel free to use the form below to
          speak your mind, and we actaully reply 😃
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
            className="w-full p-2 text-xs md:text-md border-b border-slate-700 outline-none bg-transparent mb-4"
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
            className="w-full p-2 text-xs md:text-md border-b border-slate-700 outline-none bg-transparent mb-4"
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
            className="w-full h-auto p-2 text-xs md:text-md border border-slate-700 outline-none bg-transparent my-4 rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="md:text-sm bg-slate-700 py-2 px-4 text-slate-50 rounded outline-none font-light hover:shadow-md hover:shadow-slate-700 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-200"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
