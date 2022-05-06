import { Formik } from "formik";
import { useCallback } from "react";
import * as yup from "yup";
import Button from "../styles/src//components/Button";
import FormField from "../styles/src/components/FormField";
import { makeClient } from "../styles/src/service/api";

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(10).required().label("Password"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInpage = () => {
  const handleFormSubmit = useCallback(async ({ email, password }) => {
    try {
      console.log("hello");
      const response = await makeClient().post("/sign-in", { email, password });
      console.log(response);
      const { data } = response;
      console.log(data);
    } catch (err) {
      const { response: { data, status } = {} } = err;
      if (!status) {
        // JS ERROR
      }

      console.log(err);
    }
  }, []);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, isSubmitting, isValid }) => (
        <form onSubmit={handleSubmit}>
          <FormField name="email" type="email" label="E-mail" />
          <FormField name="password" type="password" label="Password" />
          <Button type="submit" className="block mt-4">
            Sign In
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default SignInpage;
