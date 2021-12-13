import Box from "components/Box";
import Stack from "components/Stack";
import Icon from "components/Icon";
import styles from "./contactMe.module.css";

const ContactMe = (props) => {
  const { className = "", ...rest } = props;
  const myClass = `${styles.contactMe} ${className}`;

  return (
    <Stack className={myClass} asList space="var(--s-1)" {...rest}>
      <Box className={styles.contactCard} borderWidth="var(--s-4)">
        <a
          href="https://github.com/arthropodSeven"
          rel="me external"
          className="padding:0 margin:0">
          <Icon iconId="github">github.com/arthropodSeven</Icon>
        </a>
      </Box>
      <Box className={styles.contactCard} borderWidth="var(--s-4)">
        <a
          href="mailto:me@acstb.name"
          rel="me external"
          className="padding:0 margin:0">
          <Icon iconId="envelope">
            <span className="u-email">me@acstb.name</span>
          </Icon>
        </a>
      </Box>
    </Stack>
  );
};

export default ContactMe;
