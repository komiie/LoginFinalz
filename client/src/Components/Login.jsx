import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, //håller värde för errors
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: data.email,
        password: data.password,
      });
      console.log(data);
      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        redirect("/loginsida");
        console.log("logged in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <p>{errors.email?.message}</p>
          <input
            {...register("email", {
              required: "Email can't be empty",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email.",
              },
            })}
            type="text"
            placeholder="Email"
            autoComplete="off"
          />

          <p>{errors.password?.message}</p>
          <input
            {...register("password", {
              required: "Password can't be empty",
            })}
            type="password"
            placeholder="Password"
          />

          <button type="submit">Login</button>
          <button onClick={() => redirect("/register")} type="submit">
            Registrera dig
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
