import { Form } from './RadioForm.Styled';
import PropTypes from 'prop-types';

export const RadioForm = ({ onRadioChange }) => {
  const onChange = e => {
    const value = e.currentTarget.value;
    onRadioChange(value);
  };

  return (
    <Form>
      <label>
        Bar chart
        <input
          type="radio"
          value="bar"
          name="chartType"
          defaultChecked
          onChange={onChange}
        ></input>
      </label>
      <label>
        Line chart
        <input
          type="radio"
          value="line"
          name="chartType"
          onChange={onChange}
        ></input>
      </label>
      <label>
        Pie chart
        <input
          type="radio"
          value="pie"
          name="chartType"
          onChange={onChange}
        ></input>
      </label>
    </Form>
  );
};

RadioForm.propTypes = {
  onRadioChange: PropTypes.func,
};
