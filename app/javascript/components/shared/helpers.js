export const inputClasses = (fieldName, state) => {
    let classes = "form-control";
    if (state.errors[fieldName]) {
        classes = `${classes} is-invalid`
    }
    return classes;
}

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const verifyAndSetFieldErrors = (context, fieldNames) => {
    let errors = {};

    fieldNames.forEach((fieldName) => {
      const fieldError = context.checkErrors(context.state, fieldName);
      errors = Object.assign({}, errors, fieldError);
    });

    if (Object.keys(errors).length > 0) {
      context.setState({ errors });
    }
  };