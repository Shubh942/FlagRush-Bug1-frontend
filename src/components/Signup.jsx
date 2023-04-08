import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

const SignUp = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClick = () => setshow(!show);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword || !password || !name) {
      // console.log("password do no match");
      toast.error("Passwords do not match!", {
        autoClose: 1000,
      });
      return;
    } else {
      try {
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "https://FlagRush-Bug1-Backend.shubh-mehta.repl.co/api/v1/users/signup",
          {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          },
          config
        );
        // console.log("data", data);
        toast.success("Signup Sucesssfully", {
          autoClose: 1000,
        });
        // console.log(data);
        setLoading(false);

        if (!data) {
          toast.error("invalid credentials", {
            autoClose: 1000,
          });
          setLoading(false);
        } else {
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setLoading(false);
          toast.success("Signup Sucesssfully", {
            autoClose: 1000,
          });
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong", {
          autoClose: 1000,
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h3 className="signup-welcome">Welcome</h3>
        <div className="signup-input">
          <p>
            If you want to clear this ctf you need to login with admin account
          </p>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-username"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-username"
          />
          <div className="signup-password">
            {show ? (
              <AiOutlineEye className="btn-see" onClick={handleClick} />
            ) : (
              <AiOutlineEyeInvisible
                className="btn-see"
                onClick={handleClick}
              />
            )}

            <input
              type={show ? "text" : "password"}
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-username"
            />
          </div>
          <input
            type={show ? "text" : "password"}
            placeholder="confirm password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-username"
          />
        </div>
        <a type="submit" className="btn-cta-orange" onClick={submitHandler}>
          {loading ? <BeatLoader color="#fff" /> : "Sign Up"}
        </a>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignUp;
