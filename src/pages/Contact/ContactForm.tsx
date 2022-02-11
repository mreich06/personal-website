import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Contact.scss";
import GitHubIcon from "../../assets/github.svg";
import CodepenIcon from "../../assets/codepen.svg";
import LinkedInIcon from "../../assets/linkedin.svg";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#00C9D1",
      },
      "&:hover fieldset": {
        borderColor: "#00C9D1",
      },
      "& label.Mui-focused": {
        color: "#00C9D1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
});

type SocialMediaLinkType = {
  icon: string;
  link: string;
};

const ContactForm = (): JSX.Element => {
  const classes = useStyles();
  const SocialMediaLinks: SocialMediaLinkType[] = [
    { icon: LinkedInIcon, link: "https://github.com/mreich06" },
    { icon: GitHubIcon, link: "https://www.linkedin.com/in/maya-reich/" },
    { icon: CodepenIcon, link: "https://codepen.io/mreichcode" },
  ];
  return (
    <div className="contactForm">
      <div className="alignFields">
        <div className="smallFields">
          <div className="name">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              className={classes.root}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              className={classes.root}
            />
          </div>
        </div>
        <div className="message">
          <TextField
            multiline
            rows={6}
            fullWidth
            id="outlined-basic"
            label="Message"
            className={classes.root}
          />
        </div>
      </div>
      <div className="button">
        <button className="sendButton">
          <p className="buttonText">Send Message</p>
        </button>
      </div>
      <div className="footer">
        <div className="socialMedia">
          {SocialMediaLinks.map((item: SocialMediaLinkType) => (
            <a onClick={() => window.open(item.link)}>
              <img src={item.icon} className="icon" />
            </a>
          ))}
        </div>
        <p className="description">Designed and Developed by Maya Reich</p>
      </div>
    </div>
  );
};

export default ContactForm;
