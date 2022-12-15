export const inputClasses = (fieldName, state) => {
    let classes = "form-control";
    if (state.errors[fieldName]) {
        classes = `${classes} is-invalid`
    }
    return classes;
}