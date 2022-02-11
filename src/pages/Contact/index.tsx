import React from "react";
import IconHeader from "../../components/IconText/IconHeader";
import WavingIcon from "../../assets/hand-waving.svg";
import "./Contact.scss";
import ContactForm from "./ContactForm";

const Contact = (): JSX.Element => {
  return (
    <div className="experienceMargin">
      <div className="row">
        <IconHeader title={"say hello!"} icon={WavingIcon} />
      </div>
      <p className="description">
        I am always open to new projects or new opportunities. Drop me a message
        if you are interested!
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
