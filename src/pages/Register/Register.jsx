import React, { useRef ,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import './Register.css'
function Register() {
  const [password, setpassword] = useState("");
  const [visible, setVisble] = useState(true);
  const navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();
  async function handleSubmit(e) {
    e.preventDefault();

    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !emailValue ||
      !passValue
    ) {
      alert("Please fill out all fields");
      return;
    }
    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });
      alert("registered successfully. please login");
      navigate("/login");
    } catch (error) {
      alert("something went wrong");
      console.log(error.message);
    }
  }
  return (
    <section className="px-4 bg-light login text-center authfy-panel panel-login text-center active col">
      <div class="authfy-heading">
        <h3 className="auth-title">Join the network</h3>
        <p>
          Already have an account?
          <Link className="lnk-toggler" to={"/login"}>
            Sign in
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="wrap-input">
          <input
            className="login-input form-control input-lg"
            ref={emailDom}
            type="email"
            placeholder="Email"
          />
        </div>
        <br />
        <div className="row g-3">
          <div className="col">
            <input
              className=" login-input form-control input-lg"
              ref={firstnameDom}
              type="text"
              placeholder="First Name"
            />
          </div>
          <br />
          <div className="col">
            <input
              className="login-input form-control input-lg"
              ref={lastnameDom}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <br />
        <div>
          <input
            className="login-input form-control input-lg"
            ref={usernameDom}
            type="text"
            placeholder="User Name"
          />
        </div>
        <br />
        <div className="form-group login-input-password">
          <input
            className="login-input form-control input-lg col-4"
            value={password}
            ref={passwordDom}
            type={visible ? "text" : "password"}
            id="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="password"
          />{" "}
          <span className="icon-pass" onClick={() => setVisble(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
        </div>
        <br />
        <button
          className="login-btn btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Agree and Join
        </button>

        <br />
        <p>
  I agree to the{" "}
  <Link className="lnk-toggler" to={"https://www.evangadi.com/legal/privacy/"}>
    privacy policy
  </Link>
  {" "}and{" "}
  <Link className="lnk-toggler" to={"https://www.evangadi.com/legal/terms/"}>
    terms of service.
  </Link>
</p>

        <Link className="lnk-toggler" to={"/login"}>
          Already have an account?
        </Link>
        <br/>
      <br/>
      </form>
     
    </section>
  );
}

export default Register;