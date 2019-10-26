import React, { FC } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { grey, darkBlue, white } from "../../css/snippets/colors";
import {
  h6FontSize,
  montserrat,
  montserratBold,
  montserratLight,
  smallFontSize
} from "../../css/snippets/fonts";
import { ReactComponent as Loading } from "../../media/images/loading.svg";
import ReCAPTCHA from "react-google-recaptcha";
import fetch from "cross-fetch";

const FormContainer = styled.div`
  padding: 25px;
  margin-top: 50px;
  background-color: ${grey};
  border-radius: 3px;
  ${montserratBold}
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${white};
  padding: 5px;
  ${montserrat}
`;

const FormTitle = styled.div`
  ${h6FontSize};
  color: ${darkBlue};
`;

const Submit = styled.button`
  padding: 12px;
  color: ${white};
  background-color: ${darkBlue};
  ${montserratLight}
  justify-self: flex-start;
`;

const Label = styled.label`
  ${smallFontSize}
  ${montserratLight}
`;

const Error = styled.div`
  ${smallFontSize}
  ${montserratLight}
    color: red;
`;

export const HomeForm: FC = () => (
  <FormContainer>
    <Formik
      initialValues={{ name: "", email: "", recaptcha: "" }}
      validate={(
        values
      ): { name?: string; email?: string; recaptcha?: string } => {
        const errors: {
          name?: string;
          email?: string;
          recaptcha?: string;
        } = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.recaptcha) {
          errors.recaptcha = "Please complete the security challenge.";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setStatus }): Promise<void> => {
        const resp = await fetch("http://jcontchem.com:5000/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });

        try {
          await resp.json();
          setSubmitting(false);
          setStatus({
            success:
              "Thanks for your interest, we will contact you ASAP regarding submissions."
          });
        } catch (err) {
          setSubmitting(false);
          setStatus({
            success:
              "There was an error sending your inquiry.  Please reload the page and try again."
          });
        }
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
        setFieldValue,
        status
      }): JSX.Element =>
        !status || !status.success ? (
          <Form onSubmit={handleSubmit}>
            <FormTitle>Contribute to JContChem</FormTitle>
            {!isSubmitting && (
              <>
                <div>
                  <Label>Your Name:</Label>
                  <Input
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && <Error>{errors.name}</Error>}
                </div>
                <div>
                  <Label>Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Error>{errors.email}</Error>
                  )}
                </div>
                <ReCAPTCHA
                  sitekey="6LeUjb4UAAAAAB9MlX2VKW4iweA7UufwLK1630Y4"
                  onChange={(token): void => setFieldValue("recaptcha", token)}
                />
                {errors.recaptcha && touched.recaptcha && (
                  <Error>{errors.recaptcha}</Error>
                )}
                <Submit type="submit" disabled={isSubmitting}>
                  Submit
                </Submit>
              </>
            )}
            {isSubmitting && <Loading style={{ filter: "invert(100%)" }} />}
          </Form>
        ) : (
          <p>{status.success}</p>
        )
      }
    </Formik>
  </FormContainer>
);
