import { useState } from "react";
import "./style.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 2) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("username must be 3 or more letter");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("enter a valid email");
      setEmailColor("red");
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("password should be 8 or more character");
      setPasswordColor("red");
    }

    if (confirmPassword === password && confirmPassword.length >= 8) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("password and confirm password not matching");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            style={{ borderColor: userColor }}
            type="text"
            placeholder="enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="error">{errorUsername}</p>

          <input
            style={{ borderColor: emailColor }}
            type="text"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            style={{ borderColor: passwordColor }}
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            style={{ borderColor: confirmPasswordColor }}
            type="text"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
