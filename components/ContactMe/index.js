import Box from "components/Box";
import Stack from "components/Stack";
import Icon from "components/Icon";
import styles from "./contactMe.module.css";

const ContactMe = (props) => {
  const { className = "", ...rest } = props;
  const myClass = `${styles.contactMe} ${className}`;

  return (
    <Stack className={myClass} asList space="var(--s-1)" {...rest}>
      <div>
        <ContactCard href="https://github.com/arthropodSeven/">
          <Icon iconId="github" className="font-size:larger">
            github.com/arthropodSeven
          </Icon>
        </ContactCard>
      </div>
      <div>
        <ContactCard href="mailto:arthropodSeven@pm.me">
          <Icon iconId="envelope" className="font-size:larger">
            arthropodSeven@pm.me
          </Icon>
        </ContactCard>
      </div>
    </Stack>
  );
};

const ContactCard = (props) => {
  const { children, className = "", href, ...rest } = props;
  const myClass = [styles.contactCard, className].join(" ");

  return (
    <Box className={myClass} borderWidth="var(--s-3)" {...rest}>
      <a href={href} rel="me external" className="padding:0 margin:0">
        {children}
      </a>
    </Box>
  );
};

export default ContactMe;
