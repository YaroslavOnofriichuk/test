import { Form } from './TextForm.Styled';
import PropTypes from 'prop-types';

export const TextForm = ({ onTextChange }) => {
  const onChange = e => {
    const value = e.currentTarget.value;
    const array = value
      .trim()
      .split(',')
      .filter(el => el.length > 0);
    const target = e.target.name;
    onTextChange(target, array);
  };

  const onEnterPress = e => {
    if (e.key === 'Enter') {
      const value = e.target.value;
      const array = value
        .trim()
        .split(',')
        .filter(el => el.length > 0);
      const target = e.target.name;
      onTextChange(target, array);
    }
  };

  return (
    <Form onKeyDown={onEnterPress}>
      <label>
        X axis labels:
        <input type="text" name="labels" onBlur={onChange}></input>
      </label>

      <label>
        Y axis labels:
        <input type="text" name="values" onBlur={onChange}></input>
      </label>
    </Form>
  );
};

TextForm.propTypes = {
  onTextChange: PropTypes.func,
};
