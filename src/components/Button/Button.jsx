import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.any,
};
