import Box from "components/Box";
import Stack from "components/Stack";
import styles from "./contactMe.module.css";

const ContactMe = (props) => {
  const { className = "", relMe = false, ...rest } = props;
  const myClass = `${styles.contactMe} ${className}`;

  return (
    <Box className={myClass} borderWidth="var(--s-4)" {...rest}>
      <Stack asList>
        <div>
          <a
            href="https://github.com/arthropodSeven/"
            rel={`${relMe ? "me" : ""} external`}>
            github.com/arthropodSeven
          </a>
        </div>
        <div>
          <a
            href="mailto:arthropodSeven@pm.me"
            rel={`${relMe ? "me" : ""} external`}>
            arthropodSeven@pm.me
          </a>
        </div>
      </Stack>
    </Box>
  );
};

export default ContactMe;
