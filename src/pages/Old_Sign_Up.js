import React from "react";
import { useFormik } from "formik";
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
const validata = values => {
  let errors = {}
  if(!values.userName) {
    errors.userName = 'required'
  }
  if(!values.email) {
    errors.email = 'required'
  } else if(!/^[A-Z0-9._%+_]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'email is not a valid email'
  }
  if(!values.password) {
    errors.password = 'required'
  }
  if(!values.conformPassword) {
    errors.conformPassword = 'required'
  } else if(values.password !== values.conformPassword) {
    errors.conformPassword = 'password dose not match'
  }
  return errors
}
const validationSchema = Yup.object({
  userName: Yup.string().required('required'),
  email: Yup.string().email('email is not a valid email').required('required'),
  password: Yup.number().min(8).required('required'),
  conformPassword: Yup.string().min(8).required('required')
})

const Old_Sign_Up = () => {
  const Formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log("formik touched",Formik.touched);
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-700 mt-40">
      <div className="w-[400px] h-[400px] flex flex-col">
        <form
          className="w-full h-full flex flex-col"
          onSubmit={Formik.handleSubmit}
        >
          <div className="w-full h-[100px] flex flex-col">
            <label name="userName">UserName</label>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.userName}
            />
            {Formik.touched.userName && Formik.errors.userName ? (<div className="w-full h-10 text-red-300 flex justify-center items-center">{Formik.errors.userName}</div>) : null}
          </div>

          <div className="w-full h-[100px] flex flex-col">
            <label name="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.email}
            />
            {Formik.touched.email && Formik.errors.email ? <div className="w-full h-10 text-red-300 flex justify-center items-center">{Formik.errors.email}</div> : null}
          </div>

          <div className="w-full h-[100px] flex flex-col">
            <label name="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.password}
            />
            {Formik.touched.password && Formik.errors.password ? <div className="w-full h-10 text-red-300 flex justify-center items-center">{Formik.errors.password}</div> : null}
          </div>

          <div className="w-full h-[100px] flex flex-col">
            <label name="conformPassword">conformPassword</label>
            <input
              type="password"
              name="conformPassword"
              id="conformPassword"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.conformPassword}

            />
            {Formik.touched.conformPassword && Formik.errors.conformPassword ? <div className="w-full h-10 text-red-300 flex justify-center items-center">{Formik.errors.conformPassword}</div> : null}
          </div>

          <button
            className="w-40 h-10 bg-lime-500 text-white flex justify-center items-center"
            type="submit"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Old_Sign_Up;
