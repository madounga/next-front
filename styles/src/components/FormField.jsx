import { Field } from "formik";
import Input from "./input";

const FormField = (props) => {
  const { as: Component = Input, name, label, ...otherProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <label>
          <span className="block mb-2">{label}</span>
          <Component {...field} {...otherProps} />
          {meta.error && meta.touched ? (
            <span className="block text-red-700">{meta.error}</span>
          ) : null}
        </label>
      )}
    </Field>
  );
};

export default FormField;
