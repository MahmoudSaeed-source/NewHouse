import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup'
const initialValues = {
  userName: "",
  email: "",
  password: "",
  conformPassword: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  userName: Yup.string().required('required'),
  email: Yup.string().email('email is not a valid email').required('required'),
  password: Yup.number().min(8).required('required'),
  conformPassword: Yup.string().min(8).required('required')
})

const Sign_Up = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-700 mt-40">
      <div className="w-[400px] h-[400px] flex flex-col">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form
          className="w-full h-full flex flex-col"
        >
          <div className="w-full h-[100px] flex flex-col">
            <label name="userName">UserName</label>
              <Field
              type="text"
              name="userName"
              id="userName"
              
            />
              <ErrorMessage name='UserName'/>
          </div>

          <div className="w-full h-[100px] flex flex-col">
            <label name="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              autoComplete="none"
        
            />
              <ErrorMessage name='email' />
          </div>

          <div className="w-full h-[100px] flex flex-col">
            <label name="password">password</label>
            <Field
              type="password"
              name="password"
              id="password"
            />
              <ErrorMessage name='password' />
          </div>

          <div className="w-full h-[100px] flex flex-col">
            <label name="conformPassword">conformPassword</label>
              <Field
              type="password"
              name="conformPassword"
              id="conformPassword"
              
              
            />
              <ErrorMessage name='conformPassword' />
          </div>

          <button
            className="w-40 h-10 bg-lime-500 text-white flex justify-center items-center"
            type="submit"
          >
            SignUp
          </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Sign_Up;
