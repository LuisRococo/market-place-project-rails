import React from "react";
import { PropTypes } from "prop-types";
import { inputClasses } from "../shared/helpers";

function TextArea(props) {
  return (
    <div className="form-group row">
      <label htmlFor={props.name} className="col-md-3 col-form-label">
        {props.title}
      </label>
      <div className="col-md-9">
        <textarea
          name={props.name}
          id={props.name}
          rows={props.rows}
          value={props.value}
          onChange={props.onChange}
          className={inputClasses(`${props.name}`, props.state)}
          placeholder={props.placeholder}
          autoFocus={props.autoFocus}
          onBlur={props.onBlur}
        ></textarea>
        {props.state.errors[props.name] ? (
          <div className="invalid-feedback">{props.name}</div>
        ) : null}
      </div>
    </div>
  );
}

TextArea.protoTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  state: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TextArea;
