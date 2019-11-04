import React, { FC } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { grey, darkBlue, white, blue } from "../../css/snippets/colors";
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
  margin-top: 50px;
  background-color: ${grey};
  border-radius: 3px;
  ${montserratBold}

  @media screen and (max-width: 768px) {
    padding: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 25px;
  }
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
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  border: none;
  background-color: ${white};
  padding: 5px;
  ${montserrat}
  display: block;
  width: 100%;
  box-sizing: border-box;
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

const SmallLabel = styled.div`
  font-size: 11px;
  ${montserratLight}

  a {
    color: ${blue};
  }
`;

interface ValuesProps {
  name?: string;
  email?: string;
  recaptcha?: string;
  message?: string;
}

export const HomeForm: FC = () => (
  <FormContainer>
    <Formik
      initialValues={{ name: "", email: "", recaptcha: "", message: "" }}
      validate={(values): ValuesProps => {
        const errors: {
          name?: string;
          email?: string;
          recaptcha?: string;
          message?: string;
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

        if (!values.message) {
          errors.recaptcha = "Please enter a message.";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setStatus }): Promise<void> => {
        try {
          await fetch("http://jcontchem.com:5000/mail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          });

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
            <FormTitle>Contact JContChem</FormTitle>

            {!isSubmitting && (
              <>
                <SmallLabel>
                  Please feel free to reach out with any questions about
                  jcontchem, submissions or other inquiries. For details on
                  contributing, please see the{" "}
                  <a href="/contribute">contribute page.</a>
                </SmallLabel>
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
                <div>
                  <Label>Message:</Label>
                  <TextArea
                    rows={5}
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && (
                    <Error>{errors.message}</Error>
                  )}
                </div>
                <ReCAPTCHA
                  sitekey="6LeUjb4UAAAAAB9MlX2VKW4iweA7UufwLK1630Y4"
                  onChange={(token): void => setFieldValue("recaptcha", token)}
                />
                <SmallLabel>
                  <em>
                    To reach us directly, please email{" "}
                    <a href="mailto:submissions@jcontchem.com">
                      submissions@jcontchem.com
                    </a>
                  </em>
                </SmallLabel>
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
