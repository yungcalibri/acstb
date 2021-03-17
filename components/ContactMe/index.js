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
        <ContactCard href="https://github.com/arthropodSeven/">
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
        <ContactCard href="mailto:arthropodSeven@pm.me">
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
  const myClass = [styles.contactCard, className].join(" ");

  return (
    <Box className={myClass} borderWidth="var(--s-3)" {...rest}>
      <a href={href} rel="me external" className="padding:0 margin:0">
        <Cluster align="center">{children}</Cluster>
      </a>
    </Box>
  );
};

export default ContactMe;
