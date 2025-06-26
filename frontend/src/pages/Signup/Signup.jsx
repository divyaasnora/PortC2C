import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '' 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/signup', inputs)
      .then((res) => {
        alert("Registered successfully: " + res.data.message);
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='sign'>
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name'><b>Name</b></label>
          <input type="text" placeholder="Enter name" name='name' className='fomr' onChange={handleChange} required />

          <label htmlFor='email'><strong>Email</strong></label>
          <input type="email" placeholder="Enter email" name='email' className='fomr' onChange={handleChange} required />

          <label htmlFor='password'><strong>Password</strong></label>
          <input type="password" placeholder="Enter password" name='password' className='fomr' onChange={handleChange} required />

          <button type="submit" className='btn'>Sign up</button>
        </div>
      </form>
      <p>
        You agree to our <a href="#">terms and conditions</a>.
        <Link to={"/login"} className='link'> Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
