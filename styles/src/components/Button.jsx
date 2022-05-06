import classnames from "classnames";

const Button = (props) => (
  <button
    {...props}
    className={classnames(
      props.className,
      "px-2 py-1.5 bg-blue-600 text-lg text white font-bold active:bg-blue-400"
    )}
  />
);

export default Button;
