import Layout from "../../components/layout.component";
import { useRef, useState } from "react";
import Contact from "../../components/contact.component";
import { sendForm } from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
      // router.back();
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
    <Layout title="Pitstop | Contact">
      <Contact submitForm={handleSubmit} loading={loading} />
    </Layout>
  );
};

export default ContactPage;
