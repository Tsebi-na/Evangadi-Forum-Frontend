import React, { useRef, useState } from 'react';
import axios from '../../axiosConfig';
import { Link, useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

function Login({toggle}) {
  const emailDom = useRef();
  const passwordDom = useRef();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handlePasswordToggle = () => {
    setVisible(!visible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      alert('Please provide all required information');
      return;
    }

    try {
      const { data } = await axios.post('/users/login', {
        email: emailValue,
        password: passValue,
      });
      alert('Login successful.');
      localStorage.setItem('token', data.token);
      navigate('/all-questions');
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.error(error.response.data);
    }
  };

  return (
    <section className="my-section px-4 custom-login-wrapper text-center authfy-panel panel-login text-center active">
      <div className="my-heading">
        <h3 className="custom-auth-title">Login to your account</h3>
       
        <p>Don't have an account? <Link to="#" onClick={toggle} className='create'>Create a new account</Link></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="wrap-input">
          <input
            className="custom-login-input form-control input-lg"
            ref={emailDom}
            type="email"
            placeholder="Email address"
          />
        </div>
        <br />
        <div className="form-group custom-password-input-wrapper">
  <div className="position-relative">
    <input
      className="custom-login-input form-control input-lg col-4"
      value={password}
      ref={passwordDom}
      type={visible ? 'text' : 'password'}
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    <span className="custom-password-toggle position-absolute end-0 top-50 translate-middle-y" onClick={handlePasswordToggle}>
      {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
    </span>
  </div>
</div>


        <div className="text-end">
          <Link className="lnk-toggler" to="/register">
            Forgot password
          </Link>
        </div>

        <br />
        <div className="form-group">
          <button className="custom-login-btn btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;