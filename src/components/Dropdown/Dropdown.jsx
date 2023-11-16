import PropTypes from "prop-types";
import { StyledDropdown } from "./Dropdown.styled";

export const Dropdown = ({ items, value, title, id, name, onChange }) => {
  return (
    <StyledDropdown>
      <label htmlFor={id}>{title}:</label>
      <select name={name} id={id} onChange={onChange} value={value}>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
