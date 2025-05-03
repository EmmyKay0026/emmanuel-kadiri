import ContactFormImg from "../molecules/ContactFormImg";
import ContactForm from "../molecules/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col py-[40px] px-[20px] md:px-[50px] lg:px-[70px] lg:flex-row bg-accent dark:bg-secondary"
    >
      <div className="w-full lg:w-[60%]">
        <ContactForm />
      </div>
      <div className="w-full lg:w-[40%] static lg:sticky lg:top-10 lg:self-start lg:h-screen ">
        <ContactFormImg />
      </div>
    </section>
  );
};

export default Contact;
