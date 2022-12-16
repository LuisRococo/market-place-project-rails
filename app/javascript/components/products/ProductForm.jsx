import React from "react";
import Form from "../shared/Form";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import { PropTypes } from "prop-types";
import Button from "../shared/Button";

function ProductForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input
        title="Name"
        type="text"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Item name"
        autoFocus={true}
        state={props.state}
      />

      <Input
        title="Price"
        type="text"
        name="price"
        value={props.state.price}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Item price"
        autoFocus={false}
        state={props.state}
      />

      <Input
        title="Quantity"
        type="number"
        name="quantity"
        value={props.state.quantity}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Item quantity"
        autoFocus={false}
        state={props.state}
      />

      <TextArea
        title="Description"
        rows="5"
        name="description"
        value={props.state.description}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Item description"
        autoFocus={false}
        state={props.state}
      />

      <div className="form-group row">
        <label htmlFor="image" className="col-md-3 col-form-label">
          Image
        </label>
        <div className="col-md-9">
          <input type="file" name="image" id="image" className="form-control" />
        </div>
      </div>

      <Button>{props.buttonText}</Button>
    </Form>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ProductForm;
