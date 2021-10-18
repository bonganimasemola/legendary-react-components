import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const LoginForm = ({ btnMess, setLogin, card, mess }) => {
  btnMess = btnMess || "Login";
  card = card || "w3-card";
  mess = mess || "Legendary Login";

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
    emailPlaceholder: "Enter Email",
    passPlaceholder: "Enter Password",
  });

  function submitForm() {
    console.log("Form Submited");

    if (inputs.email === "") {
      setInputs({ ...inputs, emailPlaceholder: "!!! Email Required" });
      toast.error("Email Is Required", {
        toastId: "dsadsa",
      });
      return;
    }

    if (inputs.pass === "") {
      setInputs({ ...inputs, passPlaceholder: "!!! Password Required" });
      toast.error("Password Is Required", {
        toastId: "0dsad3",
      });
      return;
    }

    if (inputs.email.trim().includes(" ")) {
      toast.error("!! Email Should Not Include White Spaces", {
        toastId: "001",
      });
      setInputs({
        ...inputs,
        email: "",
        emailPlaceholder: "!!! No spaces allowed",
      });
      return;
    }

    if (!inputs.email.trim().includes("@")) {
      toast.error("!! Wrong Email Format", {
        toastId: "0da02",
      });
      setInputs({
        ...inputs,
        email: "",
        emailPlaceholder: "!!! Invalid email",
      });
      return;
    }

    setLogin({ email: inputs.email, password: inputs.pass });
    setInputs({
      ...inputs,
      email: "",
      pass: "",
      emailPlaceholder: "Enter Email",
      passPlaceholder: "Enter Password",
    });
  }

  return (
    <div className={`w3-container ${card}`}>
      <h3 className="w3-center">
        <b>{mess}</b>
      </h3>
      <div className="w3-cell-row">
        <div className="w3-cell w3-cell-middle">
          <span className="w3-xxlarge w3-right">
            <MdEmail />
          </span>
        </div>
        <div className="w3-cell">
          <input
            className="w3-input w3-border"
            type="text"
            placeholder={inputs.emailPlaceholder}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
      </div>
      <div className="w3-cell-row">
        <div className="w3-cell w3-cell-middle">
          <span className="w3-xxlarge w3-right">
            <AiFillUnlock />
          </span>
        </div>
        <div className="w3-cell">
          <input
            className="w3-input w3-border"
            type="password"
            placeholder={inputs.passPlaceholder}
            value={inputs.pass}
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
        </div>
      </div>
      <div className="w3-bar w3-margin-bottom">
        <div className="w3-center">
          <button
            className="w3-button w3-blue w3-round w3-ripple"
            onClick={() => submitForm()}
          >
            {btnMess}
          </button>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };
