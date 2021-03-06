
import { Formik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

const FormControl = styled("div")`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin: 10px 0px;
`;

const Form = (props) => {
  
  const submitForm = (formProps) => {
    props.onSubmit(formProps);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        submitForm(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </FormControl>

          <FormControl>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </FormControl>
          <LoadingButton
            variant="outlined"
            fullWidth
            loading={props.loading}
            type="submit"
            disabled={isSubmitting}
            sx={{
              mt: "20px",
            }}
          >
            {props.label || "Submit"}
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default Form;
