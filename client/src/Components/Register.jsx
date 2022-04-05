import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const formSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <p>{errors.firstName?.message}</p>
          <input
            {...register("firstName", {
              required: "Fill in first name",
            })}
            type="text"
            placeholder="First name"
          />
          <p>{errors.lastName?.message}</p>
          <input
            {...register("lastName", {
              required: "Fill in last name",
            })}
            type="text"
            placeholder="Last name"
          />
          <p>{errors.email?.message}</p>
          <input
            {...register("email", {
              required: "Fill in email",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email.",
              },
            })}
            type="text"
            placeholder="Email"
          />
          <p>{errors.password?.message}</p>
          <input
            {...register("password", {
              required: "Fill in password",
            })}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

{
  /* <p>{errors.firstName?.message}</p> */
}

{
  /* <input
            {...register("firstName")}
            placeholder="First name"
            type="text"
            autoComplete="off" Username + Password
          /> */
}

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("http://localhost:4000/create", {
//         method: "POST",
//         body: JSON.stringify({
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           password: data.password,
//           confirmPassword: data.confirmPassword,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       await response.json();
//
//     } catch (err) {
//       console.log(err);
//     }
//   };
