import Box from "components/Box";

const Skill = (props) => {
  const { className = "", skill, years, ...rest } = props;

  const myClass = `${className} p-skill`;

  return (
    <Box borderWidth="var(--s-4)" padding="0" className={myClass} {...rest}>
      <span style={{ padding: "var(--s-1)" }}>{skill}</span>
      {years && (
        <div className="invert-title" style={{ padding: "var(--s-1)" }}>
          {years}yr.
        </div>
      )}
    </Box>
  );
};

export default Skill;
