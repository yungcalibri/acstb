import Box from "components/Box";
import Stack from "components/Stack";
import Cluster from "components/Cluster";
import styles from "./contactMe.module.css";

const ContactMe = (props) => {
  const { className = "", ...rest } = props;
  const myClass = `${styles.contactMe} ${className}`;

  return (
    <Stack className={myClass} asList space="var(--s-2)" {...rest}>
      <div>
        <ContactCard
          href="https://github.com/arthropodSeven/"
          className="padding:0 margin:0">
          <div>github.com/arthropodSeven</div>
          <div
            style={{
              height: "50px",
              width: "50px",
              background: "var(--color-background)",
            }}></div>
        </ContactCard>
      </div>
      <div>
        <ContactCard
          href="mailto:arthropodSeven@pm.me"
          className="padding:0 margin:0">
          <div>arthropodSeven@pm.me</div>
          <div
            style={{
              height: "50px",
              width: "50px",
              background: "var(--color-background)",
            }}>
            <span />
          </div>
        </ContactCard>
      </div>
    </Stack>
  );
};

const ContactCard = (props) => {
  const { children, className = "", href, ...rest } = props;

  return (
    <a href={href} className={className} rel="me external" {...rest}>
      <Box className={styles.contactCard} borderWidth="var(--s-3)">
        <Cluster align="center">{children}</Cluster>
      </Box>
    </a>
  );
};

export default ContactMe;
