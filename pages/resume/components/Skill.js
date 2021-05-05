import Box from "components/Box";

const Skill = (props) => {
  const { className = "", name, years, ...rest } = props;

  const myClass = `${className} skill`;

  return (
    <Box borderWidth="var(--s-4)" padding="0" className={myClass} {...rest}>
      <span className="p-skill">{name}</span>
      {years && <div className="invert">{years}y</div>}
    </Box>
  );
};

export default Skill;
