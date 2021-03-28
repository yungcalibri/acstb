import { propStyles } from "util/style";

const Frame = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <style jsx>{`
        .frame {
        }
      `}</style>
    </div>
  );
};

export default Frame;
